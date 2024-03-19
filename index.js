import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.7.1"

const supabaseUrl = 'https://miktkadjlncmaummihvk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pa3RrYWRqbG5jbWF1bW1paHZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MTI4MDQsImV4cCI6MjAyNjM4ODgwNH0.Z8D6wuvzmnaaDo6f9V4CNWMlMdcGY-GYbvkivAIKlOw'
const supabase = createClient(supabaseUrl, supabaseKey)


async function getBooks() {
    let { data: books, error } = await supabase
    .from('books')
    .select('*')

    let bookList = document.getElementById('books');
    for (let book of books){
        bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.ISBN}</td></tr>`;
    }

}

getBooks();