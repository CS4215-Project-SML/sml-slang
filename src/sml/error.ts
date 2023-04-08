import { SourceLocation } from './nodes'

export enum ErrorType {
  SYNTAX = 'Syntax',
  TYPE = 'Type',
  RUNTIME = 'Runtime'
}

export enum ErrorSeverity {
  WARNING = 'Warning',
  ERROR = 'Error'
}

export interface SmlError {
  type: ErrorType
  severity: ErrorSeverity
  location?: SourceLocation
  explain(): string
}

export class SyntaxError implements SmlError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR

  constructor(public location?: SourceLocation) {}

  explain(): string {
    return 'Syntax error'
  }
}

export class FunctionNameError extends SyntaxError {
  constructor(
    public expectedName: string,
    public foundName: string,
    public location: SourceLocation
  ) {
    super(location)
  }

  explain(): string {
    return `Conflicting function names: expected ${this.expectedName}, found ${this.foundName}`
  }
}

export class RuntimeError implements SmlError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR

  constructor(public location?: SourceLocation) {}

  explain(): string {
    return 'Runtime error'
  }
}

export class PatternMatchingError extends RuntimeError {
  constructor(public location?: SourceLocation) {
    super(location)
  }

  explain(): string {
    return `Non-exhaustive match failure`
  }
}

export class TypeError implements SmlError {
  public type = ErrorType.TYPE
  public severity = ErrorSeverity.ERROR

  constructor(public location: SourceLocation) {}

  explain(): string {
    return 'Type Error'
  }
}

export function parseSmlErrors(errors: SmlError[]) {
  const errorMessages = errors.map(error => {
    if (error.location) {
      const start = error.location.start
      const end = error.location.end

      const explanation = error.explain()
      return `Line ${start.line}:${start.column}-${end.line}:${end.column} : ${explanation}`
    } else {
      return error.explain()
    }
  })
  console.log(errorMessages)

  return errorMessages.join('\n')
}
