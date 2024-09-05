function checkTitle(){
    const constraints={
        title:[
            "Title must be 6-30 charactors."
        ,"^.{6,30}"
    ],
    author:[
        "Author name must start with capital letter and be fullname with a space and at least 6 charactors",
        "^[A-Z][a-z]+\s[A-Z][a-z]+.{4,}$"
    ]
    }
}