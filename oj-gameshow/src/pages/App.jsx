import CardButton from "../components/CardButton";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import { Grid, Modal } from "@mui/material";
import { useState } from "react";
import ModalFilho from "../components/ModalFilho";

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

  const [questoes, setQuestoes] = useState([
    {
      id: 1,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 2,
      categoria: "QUEM É ESSE PERSONAGEM",
      pergunta: "https://i.imgur.com/d6s8F3G.png",
      dica: "https://i.imgur.com/8y6HIrJ.jpg",
      ativo: true,
    },
    {
      id: 3,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 4,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 5,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 6,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 7,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 8,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 9,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 10,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 11,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 12,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 13,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 14,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 15,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 16,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 17,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 18,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 19,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 20,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 21,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 22,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 23,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
    {
      id: 24,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Dica teste",
      ativo: true,
    },
  ]);

  const [id, setID] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [pergunta, setPergunta] = useState("");
  const [dica, setDica] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpen = (questao) => {
    if (questao.ativo) {
      setID(questao.id);
      setCategoria(questao.categoria);
      setPergunta(questao.pergunta);
      setDica(questao.dica);
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  const handleDesativarQuestao = () => {
    const questoesAux = [...questoes];
    questoesAux[id - 1].ativo = false;

    setQuestoes(questoesAux);
    handleClose();
  };

  return (
    <Box sx={{ display: "flex", margin: "4rem 4rem" }}>
      <Sidebar />
      <Box component="main">
        <h1 className="oj-game-title">100% OJ GAMESHOW</h1>
        <Modal open={open} onClose={handleClose}>
          <Box sx={modalStyle}>
            <h1 className="oj-questao-titulo">{categoria}</h1>
            <ModalFilho categoria={categoria} pergunta={pergunta} dica={dica} />
            <button
              className="oj-questao-botao"
              onClick={handleDesativarQuestao}
            >
              Desativar Pergunta
            </button>
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
                onClick={() => handleOpen(questao)}
              >
                <CardButton id={questao.id} ativo={questao.ativo} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
