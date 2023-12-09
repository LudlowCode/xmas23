function updateItemStyleWithImageRatio(item) {
    let img = item.getElementsByTagName("img")[0];
    item.setAttribute("style", "--ratio: " + img.naturalWidth + " / " + img.naturalHeight);
  }

  function updateItems() {
    let rows = document.getElementsByClassName("item");
    for (let i = 0; i < rows.length; i++) {
      updateItemStyleWithImageRatio(rows[i]);
    }
    console.log("Elements updated.");
  }

  function addAnswerChecking(answers) {
    for (let i = 0; i < answers.length; i++) {
      let row = document.getElementById('q' + i);
      row.addEventListener("click", function () { checkAnswer(i, answers); });
    }
  }

  function checkAnswer(i, answers) {
    answer = prompt("Please type your answer to check it..").toLowerCase().trim();
    if (answers[i].includes(hash(answer))) {
      alert("🎅 Correct! Yippee ki yay!! 😀");
      document.getElementById('q' + i).style.backgroundColor = "Green";
    }
    else {
      alert("Wrong 😭(or one of us has spelled our answer wrong) Humbug. 👿");
    }
  }

  function getReady() {
    updateItems(); //Prepares CSS image spacing for full width, retaining aspect ratio.

    let hashedAnswers = [['gmlmbo', '1ek8zw5'], ['1cdex09', 'fgzckq'], ['uad0yq', '1iu3p8n', '680w3n'], ['1jlpbm'], ['1h3332f'], ['hhygxi', 'vp5qa0'], ['1n1ine', '1eub4pe'], ['1rcg4ez', 'gydwlv'], ['ci04is'], ['179j05d', '1m87nxk']];
    addAnswerChecking(hashedAnswers);
  }

  function hash(str) {
    /* A hashing funtion is a one-way function that gives an apparently random hash from a string input,
     * but you can't work out the string input from the hash. That's why it's one-way.
     * Sometimes 2 different inputs might give you the same hash. This is called a collision and is
     * undesirable.
     */ 
    // Thanks to https://gist.github.com/jlevy/c246006675becc446360a798e2b2d781
    // This is a simple, *insecure* hash that's short, fast, and has no dependencies.
    // For algorithmic use, where security isn't needed, it's way simpler than sha1 (and all its deps)
    // or similar, and with a short, clean (base 36 alphanumeric) result.
    // Loosely based on the Java version; see
    // https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript

    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash &= hash; // Convert to 32bit integer
    }
    return new Uint32Array([hash])[0].toString(36);
}