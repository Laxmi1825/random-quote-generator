const  buttonEl = document.getElementById("button");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiUrl ="https://quotes-api-self.vercel.app/quote";

 async function getquote(){
    
    try {
        const response =   await fetch(apiUrl)
        const data = await response.json()
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent; 
        authorEl.innerText = "~" +quoteAuthor;
        console.log(data);   
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error happened please try again";
        authorEl.innerText = "try again";
        
        
    }
    const response =   await fetch(apiUrl)
    const data = await response.json()
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent; 
    authorEl.innerText = "~" +quoteAuthor;
    console.log(data);
    
    
}



buttonEl.addEventListener("click", getquote)
