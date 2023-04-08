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
  location: SourceLocation
  explain(): string
}

export class SyntaxError implements SmlError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR

  constructor(public error: Error, public location: SourceLocation) {}

  explain(): string {
    return 'Syntax error'
  }
}

export class RuntimeError implements SmlError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR

  constructor(public error: Error, public location: SourceLocation) {}

  explain(): string {
    return 'Runtime error'
  }
}

export class TypeError implements SmlError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR

  constructor(public error: Error, public location: SourceLocation) {}

  explain(): string {
    return 'Type Error'
  }
}

export function parseSmlErrors(errors: SmlError[]) {
  const errorMessages = errors.map(error => {
    const start = error.location.start
    const end = error.location.end

    const explanation = error.explain()
    return `Line ${start.line}:${start.column}-${end.line}:${end.column} : ${explanation}`
  })

  return errorMessages.join('\n')
}
