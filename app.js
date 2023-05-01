function generate() {
    let quotes = {
        "-Albert Einstein": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
        "-Pierce Brown": '"Man cannot be freed by the same injustice that enslaved it."', "-Aaron Lauritsen": '"The struggles we endure today will be the good old days we laugh about tomorrow."', "-Carrie Bradshaw": '"Maybe some women arent meant to be tamed.Maybe they just need to run free until they find someone just as wild to run with them."'
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.querySelector("#quote").innerHTML = quote;
    document.querySelector("#author").innerHTML = author;

};

