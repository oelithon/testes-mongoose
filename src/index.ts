import { connect, Schema, model } from 'mongoose';

const options = {
  user: 'elithon', // Usuário do banco de dados.
  pass: 'Drgby7v3#', // senha do usuário do banco de dados.
  autoIndex: false, // Não cria index para cada inserção de dado no banco.
  dbName: 'model_example', // Define qual banco de dados vou utilizar.
};

connect('mongodb://localhost:27017/', options);


// Criamos uma interface em TypeScript para representar nosso schema:

interface Book {
  title: string,
  author: string,
}

const bookSchema = new Schema<Book>(
  {
  title: { type: String, required: true },
  author: { type: String, required: true }
  }
);

const bookModel = model<Book>('books', bookSchema);
