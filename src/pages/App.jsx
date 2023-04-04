import CardButton from "../components/CardButton";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import { Grid, Modal } from "@mui/material";
import { useState } from "react";
import ModalFilho from "../components/ModalFilho";

import Poppo from "../images/poppo.png";

function App() {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1100,
    bgcolor: "#f4a460",
    p: 4,
    borderRadius: "2rem",
    border: "0.5rem solid white",
  };

  const [questoes, setQuestoes] = useState([
    {
      id: 1,
      categoria: "TRIVIA",
      pergunta: "Quantos modos de jogo existem atualmente? (v. 3.11)",
      dica: "Lembre-se das abas no menu de lobbys.",
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
      categoria: "QUEM É ESSE PERSONAGEM",
      pergunta: "https://i.imgur.com/AqAibNN.jpg",
      dica: "https://i.imgur.com/O7fCtYG.jpg",
      ativo: true,
    },
    {
      id: 4,
      categoria: "EXPLORADOR DE MAPAS",
      pergunta: "https://i.imgur.com/nNILALj.png",
      dica: "https://i.imgur.com/pyx322U.png",
      ativo: true,
    },
    {
      id: 5,
      categoria: "TRIVIA",
      pergunta: "Quantas campanhas (incluindo DLCs e Extra) existem?",
      dica: "É um número de dois dígitos",
      ativo: true,
    },
    {
      id: 6,
      categoria: "TRIVIA",
      pergunta:
        "Qual personagem tem uma condição especial para desbloquear o cabelo de cor 9?",
      dica: "QP Shooting Dangerous",
      ativo: true,
    },
    {
      id: 7,
      categoria: "TRIVIA",
      pergunta:
        "Quais os personagens que não podem atacar outros jogadores normalmente?",
      dica: "São 3 personagens",
      ativo: true,
    },
    {
      id: 8,
      categoria: "HERÓI MUSICAL",
      pergunta: "",
      dica: "",
      ativo: true,
    },
    {
      id: 9,
      categoria: "EXPLORADOR DE MAPAS",
      pergunta: "https://i.imgur.com/vb8Ckk5.png",
      dica: "https://i.imgur.com/5tQ1J53.png",
      ativo: true,
    },
    {
      id: 10,
      categoria: "TRIVIA",
      pergunta: "Qual foi o primeiro Boss de co-op implementado no jogo?",
      dica: "7",
      ativo: true,
    },
    {
      id: 11,
      categoria: "TRIVIA",
      pergunta: "Quais os títulos das 6 Sweet Gods do jogo?",
      dica: "Tomomo, Saki, Natsumi, QP, Amami e a mais recente personagem de DLC",
      ativo: true,
    },
    {
      id: 12,
      categoria: "HERÓI MUSICAL",
      pergunta: "",
      dica: "",
      ativo: true,
    },
    {
      id: 13,
      categoria: "QUEM É ESSE PERSONAGEM",
      pergunta: "https://i.imgur.com/1gdUz0W.jpg",
      dica: "https://i.imgur.com/3mKCA7g.jpg",
      ativo: true,
    },
    {
      id: 14,
      categoria: "TRIVIA",
      pergunta:
        "Quantos pacotes de carta da comunidade existem atualmente? (v. 3.11)",
      dica: "Existem 8 pacotes, 2 são do jogo base.",
      ativo: true,
    },
    {
      id: 15,
      categoria: "TRIVIA",
      pergunta: "Quais os personagens podem fazer apenas norma de star?",
      dica: "São 2 personagens.",
      ativo: true,
    },
    {
      id: 16,
      categoria: "EXPLORADOR DE MAPAS",
      pergunta: "https://i.imgur.com/yVYhEAG.png",
      dica: "https://i.imgur.com/xSXqIxl.png",
      ativo: true,
    },
    {
      id: 17,
      categoria: "EXPLORADOR DE MAPAS",
      pergunta: "https://i.imgur.com/pNhxR3g.png",
      dica: "https://i.imgur.com/J55SrYJ.png",
      ativo: true,
    },
    {
      id: 18,
      categoria: "TRIVIA",
      pergunta: "Quais personagens vieram na primeira DLC a ser lançada?",
      dica: "Universos SUGURI e QP Shooting Dangerous",
      ativo: true,
    },
    {
      id: 19,
      categoria: "HERÓI MUSICAL",
      pergunta: "",
      dica: "",
      ativo: true,
    },
    {
      id: 20,
      categoria: "EXPLORADOR DE MAPAS",
      pergunta: "https://i.imgur.com/lJCgtU2.png",
      dica: "https://i.imgur.com/lXYOGRT.png",
      ativo: true,
    },
    {
      id: 21,
      categoria: "HERÓI MUSICAL",
      pergunta: "",
      dica: "",
      ativo: true,
    },
    {
      id: 22,
      categoria: "QUEM É ESSE PERSONAGEM",
      pergunta: "https://i.imgur.com/wtdDV2h.jpg",
      dica: "https://i.imgur.com/jEAnaCh.jpg",
      ativo: true,
    },
    {
      id: 23,
      categoria: "TRIVIA",
      pergunta: "Qual foi o primeiro evento em Orange Juice?",
      dica: "Um evento que não deu itens.",
      ativo: true,
    },
    {
      id: 24,
      categoria: "HERÓI MUSICAL",
      pergunta: "",
      dica: "",
      ativo: true,
    },
    {
      id: 25,
      categoria: "TRIVIA",
      pergunta:
        "Quantas versões alternativas existem dos personagens do jogo? ",
      dica: "É um número múltiplo de 5",
      ativo: true,
    },
    {
      id: 26,
      categoria: "TRIVIA",
      pergunta: "Quantos dados existem atualmente no jogo (v. 3.11)?",
      dica: "É entre 55 e 70",
      ativo: true,
    },
    {
      id: 27,
      categoria: "HERÓI MUSICAL",
      pergunta: "",
      dica: "",
      ativo: true,
    },
    {
      id: 28,
      categoria: "QUEM É ESSE PERSONAGEM",
      pergunta: "https://i.imgur.com/iyDmH2V.jpg",
      dica: "https://i.imgur.com/bkaIwUI.jpg",
      ativo: true,
    },
    {
      id: 29,
      categoria: "TRIVIA",
      pergunta:
        "Quais são os 3 CPUs que você joga contra na demo de Orange Juice?",
      dica: "Todo game você vai encontrar esses personagens",
      ativo: true,
    },
    {
      id: 30,
      categoria: "EXPLORADOR DE MAPAS",
      pergunta: "https://i.imgur.com/kGaml2x.png",
      dica: "https://i.imgur.com/cWmjzCg.png",
      ativo: true,
    },
    {
      id: 31,
      categoria: "TRIVIA",
      pergunta: "Quantas DLCs existem atualmente (v. 3.11)?",
      dica: "É entre 30 a 45.",
      ativo: true,
    },
    {
      id: 32,
      categoria: "QUEM É ESSE PERSONAGEM",
      pergunta: "https://i.imgur.com/ug3GtKk.png",
      dica: "https://i.imgur.com/EfNA4oP.jpg",
      ativo: true,
    },
  ]);

  const [id, setID] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [pergunta, setPergunta] = useState("");
  const [dica, setDica] = useState("");

  const [rodada2, setRodada2] = useState(false);

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

  const handlePoppoClick = () => {
    !rodada2 ? setRodada2(true) : setRodada2(false);
  };

  return (
    <Box sx={{ display: "flex", margin: "2rem 2rem 0 2rem" }}>
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
                <CardButton
                  id={questao.id}
                  ativo={questao.ativo}
                  isRodada2={rodada2}
                />
              </Grid>
            );
          })}
        </Grid>
        <Box>
          <img className="oj-poppo" src={Poppo} onClick={handlePoppoClick} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
