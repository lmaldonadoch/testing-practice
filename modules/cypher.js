const Cypher = (() => {
  const encryptUpper = (unicode, offset) => {
    if (unicode + offset > 90) {
      return unicode + offset - 90 + 65;
    }
    return unicode + offset;
  };

  const encryptLower = (unicode, offset) => {
    if (unicode + offset > 122) {
      console.log(unicode + offset - 122 + 97);
      return unicode + offset - 122 + 97;
    }
    return unicode + offset;
  };

  const encrypt = (offset, string) => {
    let array = string.split('');
    let encryptedArray = array.map((elem) => {
      if (
        elem.charCodeAt(0) + offset >= 65 &&
        elem.charCodeAt(0) + offset <= 90
      ) {
        return String.fromCharCode(encryptUpper(elem.charCodeAt(0), offset));
      } else if (
        elem.charCodeAt(0) + offset >= 97 &&
        elem.charCodeAt(0) + offset <= 122
      ) {
        console.log(elem);
        // console.log(
        //   String.fromCharCode(encryptLower(elem.charCodeAt(0), offset))
        // );

        return String.fromCharCode(encryptLower(elem.charCodeAt(0), offset));
      } else {
        return elem;
      }
    });

    return encryptedArray.join('');
  };

  return { encrypt };
})();

export default Cypher;
