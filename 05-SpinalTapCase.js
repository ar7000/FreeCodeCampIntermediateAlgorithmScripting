function spinalCase(str) {
  return str.match(/[A-Z][a-z]+|[a-z]+/g).map(a => a.toLowerCase()).join('-');
}

spinalCase('thisIsSpinalTap');