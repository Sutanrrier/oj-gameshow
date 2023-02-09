import CardButton from "../components/CardButton";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import { Grid, Modal } from "@mui/material";
import { useState } from "react";
import ModalFilho from "../components/ModalFilho";

import Imagem01 from "../images/testeimagem.png";

function App() {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1100,
    bgcolor: "#f4a460",
    p: 4,
  };

  const questoes = [
    {
      id: 1,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
    },
    {
      id: 2,
      categoria: "QUEM É ESSE PERSONAGEM",
      pergunta: "https://i.imgur.com/d6s8F3G.png",
      dica: "https://i.imgur.com/8y6HIrJ.jpg",
    },
    { id: 3, categoria: "EXPLORADOR DE MAPAS" },
    { id: 4, categoria: "HERÓI MUSICAL" },
    { id: 5, categoria: "TRIVIA" },
    { id: 6, categoria: "TRIVIA" },
    { id: 7, categoria: "TRIVIA" },
    { id: 8, categoria: "TRIVIA" },
    { id: 9, categoria: "TRIVIA" },
    { id: 10, categoria: "TRIVIA" },
    { id: 11, categoria: "TRIVIA" },
    { id: 12, categoria: "TRIVIA" },
    { id: 13, categoria: "TRIVIA" },
    { id: 14, categoria: "TRIVIA" },
    { id: 15, categoria: "TRIVIA" },
    { id: 16, categoria: "TRIVIA" },
    { id: 17, categoria: "TRIVIA" },
    { id: 18, categoria: "TRIVIA" },
    { id: 19, categoria: "TRIVIA" },
    { id: 20, categoria: "TRIVIA" },
    { id: 21, categoria: "TRIVIA" },
    { id: 22, categoria: "TRIVIA" },
    { id: 23, categoria: "TRIVIA" },
    { id: 24, categoria: "TRIVIA" },
  ];
  const [categoria, setCategoria] = useState("");
  const [pergunta, setPergunta] = useState("");
  const [dica, setDica] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = (categoria, pergunta, dica) => {
    setOpen(true);
    setCategoria(categoria);
    setPergunta(pergunta);
    setDica(dica);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex", margin: "4rem 4rem" }}>
      <Sidebar />
      <Box component="main">
        <h1 className="oj-game-title">100% OJ GAMESHOW</h1>
        <Modal open={open} onClose={handleClose}>
          <Box sx={modalStyle}>
            <h1 className="oj-questao-titulo">{categoria}</h1>
            <ModalFilho categoria={categoria} pergunta={pergunta} dica={dica} />
          </Box>
        </Modal>
        <Grid
          spacing={4}
          container
          columns={{ xs: 8, sm: 8, md: 8 }}
          columnSpacing={2}
        >
          {questoes.map((questao) => {
            return (
              <Grid
                item
                md={1}
                key={questao.id}
                onClick={() =>
                  handleOpen(questao.categoria, questao.pergunta, questao.dica)
                }
              >
                <CardButton id={questao.id} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
