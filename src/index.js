import fs from 'fs';
import Alimento from './alimentos.model.js';
import { conectDB } from './db.js';
// Lee el contenido del archivo .txt
const contenidoTxt = fs.readFileSync('./src/sentencias.txt', 'utf-8');
const alimentos = JSON.parse(contenidoTxt);
conectDB();

alimentos.forEach(async (alimento) => {
    try {
      const nuevoAlimento = new Alimento(alimento);
      await nuevoAlimento.save();
      console.log(`Alimento ${nuevoAlimento.Alimento} añadido a la base de datos.`);
    } catch (error) {
      console.error(`Error al agregar el alimento: ${error.message}`);
    }
  });
  
  