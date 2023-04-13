import * as sml from './nodes'

// Utilities for prettify

export function prettifyValue(val: sml.Constant | sml.Record | sml.Tuple | sml.List | sml.Closure) {
  let pval = ''

  val = val.tag === 'Record' ? tupleValueIfPossible(val) : val

  if (val.tag === 'Constant') {
    pval = val.type.name === 'string' ? '"' + val.value.toString() + '"' : val.value.toString()
  } else if (val.tag === 'Record') {
    let i = 0
    pval = '{'
    for (const [key, value] of Object.entries(val.items)) {
      pval += key.toString() + '=' + prettifyValue(value)
      pval += i++ < val.length - 1 ? ',' : ''
    }
    pval += '}'
  } else if (val.tag === 'Tuple') {
    let i = 0
    pval = '('
    for (const [key, value] of Object.entries(val.items)) {
      pval += prettifyValue(value)
      pval += i++ < val.length - 1 ? ',' : ''
    }
    pval += ')'
  } else if (val.tag === 'List') {
    let i = 0
    pval = '['
    for (let j = 0; j < val.items.length; j++) {
      pval += prettifyValue(val.items[j])
      pval += i++ < val.length - 1 ? ',' : ''
    }
    pval += ']'
  } else if (val.tag === 'Closure') {
    pval = 'fn'
  } else {
    throw new Error('not supported yet')
  }

  return pval
}

export function prettifyType(val: sml.Type) {
  let ptyp = ''

  val = val.name === 'record' ? tupleTypeIfPossible(val as sml.Rec) : val

  if (
    val.name === 'int' ||
    val.name === 'real' ||
    val.name === 'bool' ||
    val.name === 'char' ||
    val.name === 'string'
  ) {
    ptyp = val.name
  } else if (val.name === 'record') {
    const bodyLength = Object.keys((val as sml.Rec).body).length
    let i = 0
    ptyp = '{'
    for (const [key, value] of Object.entries((val as sml.Rec).body)) {
      ptyp += key.toString() + ':' + prettifyType(value)
      ptyp += i++ < bodyLength - 1 ? ', ' : ''
    }
    ptyp += '}'
  } else if (val.name === 'tuple') {
    const bodyLength = Object.keys((val as sml.Tup).body).length
    let i = 0
    for (let [key, value] of Object.entries((val as sml.Tup).body)) {
      value = value.name === 'record' ? tupleTypeIfPossible(value) : value
      const valtyp = prettifyType(value)
      ptyp += value.name === 'tuple' || value.name === 'function' ? '(' + valtyp + ')' : valtyp
      ptyp += i++ < bodyLength - 1 ? ' * ' : ''
    }
  } else if (val.name === 'list') {
    const body = (val as sml.Lis).body
    const bodytyp = prettifyType(body)
    ptyp = body.name === 'record' ? '(' + bodytyp + ')' : bodytyp
    ptyp += ' ' + val.name
  } else if (val.name === 'function') {
    const partyp = prettifyType((val as sml.Fun).par[0])
    ptyp = (val as sml.Fun).par[0].name === 'function' ? '(' + partyp + ')' : partyp
    ptyp += ' -> '
    ptyp += prettifyType((val as sml.Fun).ret[0])
  } else if (val.name === 'undefined') {
    throw new Error(`not supported yet`)
  } else {
    // This is for polymorphic type
    ptyp = val.name
  }

  return ptyp
}

export function prettifyPoly(t: sml.Type) {
  const poly: Array<string> = scanPolyTypes(t)
  const alpha: Array<string> = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const mapping = {}

  let idx = 0
  for (const p of poly) {
    if (!mapping.hasOwnProperty(p)) {
      mapping[p] = "'" + alpha[idx++]
    }
  }

  return assignAlphas(t, mapping)
}

// Type-related utilities

export function scanPolyTypes(t: sml.Type): Array<string> {
  const poly = []

  if (t.name.slice(0, 1) === "'") {
    poly.push(t.name)
  } else if (t.name === 'record') {
    for (const [_, value] of Object.entries((t as sml.Rec).body)) {
      poly.push(...scanPolyTypes(value))
    }
  } else if (t.name === 'list') {
    poly.push(...scanPolyTypes((t as sml.Lis).body))
  } else if (t.name === 'function') {
    poly.push(...scanPolyTypes((t as sml.Fun).par[0]))
    poly.push(...scanPolyTypes((t as sml.Fun).ret[0]))
  }

  return poly
}

export function assignAlphas(t: sml.Type, mapping: Object): sml.Type {
  if (t.name.slice(0, 1) === "'") {
    if (mapping.hasOwnProperty(t.name)) {
      t.name = mapping[t.name]
    }
  } else if (t.name === 'record') {
    for (const [key, value] of Object.entries((t as sml.Rec).body)) {
      ;(t as sml.Rec).body[key] = assignAlphas(value, mapping)
    }
  } else if (t.name === 'list') {
    ;(t as sml.Lis).body = assignAlphas((t as sml.Lis).body, mapping)
  } else if (t.name === 'function') {
    ;(t as sml.Fun).par[0] = assignAlphas((t as sml.Fun).par[0], mapping)
    ;(t as sml.Fun).ret[0] = assignAlphas((t as sml.Fun).ret[0], mapping)
  }
  return t
}

// General utilities

export function tupleValueIfPossible(val: sml.Record): sml.Record | sml.Tuple {
  const sorted = Object.keys(val.items)
    .sort()
    .reduce((obj, key) => {
      obj[key] = val.items[key]
      return obj
    }, {})

  let isTuple = true

  let i = 1
  for (const key in sorted) {
    if (key !== (i++).toString()) {
      isTuple = false
      break
    }
  }

  if (isTuple) {
    return {
      tag: 'Tuple',
      type: {
        name: 'tuple',
        body: tupleTypeIfPossible(val.type as sml.Rec)
      },
      length: Object.keys(sorted).length,
      items: sorted
    }
  }

  return val
}

export function tupleTypeIfPossible(val: sml.Rec): sml.Rec | sml.Tup {
  const sorted = Object.keys((val as sml.Rec).body)
    .sort()
    .reduce((obj, key) => {
      obj[key] = val.body[key]
      return obj
    }, {})

  let isTuple = true

  let i = 1
  for (const key in sorted) {
    if (key !== (i++).toString()) {
      isTuple = false
      break
    }
  }

  if (isTuple) {
    return {
      name: 'tuple',
      body: sorted
    }
  }

  return val
}
