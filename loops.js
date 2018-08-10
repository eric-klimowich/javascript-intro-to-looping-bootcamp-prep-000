for (i = 0; i < 25; i++) {
  array.push(`I am ${i} strange loop${if (i === 1) {
    return ''
  } else {
    return 's'
  }.`);
}

return array;
