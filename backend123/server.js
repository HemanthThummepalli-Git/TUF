const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Get all flashcards
app.get('/flashcards', async (req, res) => {
  const flashcards = await prisma.flashcard.findMany();
  res.json(flashcards);
});

// Get a specific flashcard by ID
app.get('/flashcards/:id', async (req, res) => {
  const { id } = req.params;
  const flashcard = await prisma.flashcard.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(flashcard);
});

// Create a new flashcard
app.post('/flashcards', async (req, res) => {
  const { question, answer, author } = req.body;
  const newFlashcard = await prisma.flashcard.create({
    data: { 
      question, 
      answer, 
      author, 
      DOC: new Date()  // Automatically set the DOC to the current date
    },
  });
  res.json(newFlashcard);
});

// Update an existing flashcard
app.put('/flashcards/:id', async (req, res) => {
  const { id } = req.params;
  const { question, answer, author } = req.body;
  const updatedFlashcard = await prisma.flashcard.update({
    where: { id: parseInt(id) },
    data: { 
      question, 
      answer, 
      author 
    },
  });
  res.json(updatedFlashcard);
});

// Delete a flashcard
app.delete('/flashcards/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.flashcard.delete({
    where: { id: parseInt(id) },
  });
  res.json({ message: 'Flashcard deleted' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
