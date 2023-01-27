import CircularProgress from "./components/circulateProgress";
import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  Typography,
  Button,
} from "@material-ui/core";
import logo from "./assets/logo.png"
import done from "./assets/done.png"
import whatsapp from "./assets/whatsapp.gif"
import kids from "./assets/kids.gif"


export default function App() {
  const [idade, setIdade] = useState("");
  const [escola, setEscola] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [goal, setGoal] = useState("");
  const [active, setActive] = useState("");
  const [isCalculator, setIsCalculator] = useState(false);
  const [isBarProgress, setIsBarProgress] = useState(false);
  const [IsResult, setIsResult] = useState(true);
  const [comment, setComment] = useState("")

  // const calculateTaxa = () => {
  //   if(escola === undefined || height === undefined || age === undefined) return 
  //   if (idade === "male") {
  //     return (66 + 13.8 * escola + 5 * height - 6.8 * age).toFixed(0).toString() + " Calorias";
  //   } else {
  //     return (665 + 9.6 * escola + 1.8 * height - 4.7 * age).toFixed(0).toString() + " Calorias";
  //   }
  // };

  // const calculateIMC = () => {
  //   if(escola === undefined || height === undefined) return 
  //   return ((escola / (height * height)) * 10000).toFixed(1).toString();
  // };

  // const calculatePesoIdeal = () => {
  //   if(height === undefined) return
  //   //PI = IMC desejado x (Altura x Altura)
  //   return ((23 * (height * height)) / 10000).toFixed(2).toString() + "Kg";
  // };
  // const calculateTDEE = () => {
  //   if(escola === undefined || height === undefined || age === undefined) return 
  //   //TMB = 10 * (peso) + 6.25 * (altura) – 5 * (idade) – 161
  //   //TDEE = TMB * nível de atividade física
  //   return ((10 * escola + 6.25 * height - 5 * age) * 1.375).toFixed(0).toString() + " Calorias";
  // };

  if (isCalculator || isBarProgress) {
    const handleSubmit = (event: any) => {
      event.preventDefault();
      if(idade === "") {
        setComment("Você precisa colocar a idade do seu filho")
        return
      }
      if(escola === "" ) {
        setComment("Você precisa colocar se o seu filho está na escola")
        return
      }
      if(height === "") {
        setComment("Você precisa colocar quanto tempo passa com seu filho")
        return
      }
      if(age === "") {
        setComment("Você precisa colocar a principal dificuldade do seu filho")
        return
      }
      if(goal === "") {
        setComment("Você precisa responder se o seu filho possui transtornos")
        return
      }
      if(active === "") {
        setComment("Você precisa responder o que quer ver na plataforma")
        return
      }
      setIsCalculator(false);
      setIsBarProgress(true);
      setTimeout(() => (setIsBarProgress(false), setIsResult(true)), 5700);
    };

    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            backgroundColor:"#252531",
            paddingBottom:"20%",
          }}
        >
        <Typography
          variant="h6"
          style={{
            display: "flex",
            height: "180px",
            alignItems:"center"        
          }}
          gutterBottom
        >
          <img src={logo} alt="logo" style={{height:"52%"}}/>
        </Typography>
          <Typography
            style={{ display: "flex", justifyContent: "center", color:"#fff" }}
            variant="h5"
            gutterBottom
          >
            Meus parabéns! Seja muito bem-vinda à Plataforma Aprendizagem Alpha.
          </Typography>
          {isCalculator && <Typography
            style={{ display: "flex", justifyContent: "center", color:"#fff" }}
            variant="h6"
            gutterBottom
          >
            Preencha o formulário abaixo para que possamos personalizar a plataforma de acordo com o seu filho!
          </Typography>}
          {isBarProgress && <Typography
            style={{ display: "flex", justifyContent: "center", color:"#fff" }}
            variant="h6"
            gutterBottom
          >
            Nossa equipe já está montando a sua plataforma...
          </Typography>}
          <div> 
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
                background: "#f0f0f0",
                minHeight: "400px",
                minWidth: "300px"
              }}
            >
              {isCalculator && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop:"5%"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "10px",
                      justifyContent: "center",
                      padding: "0px 30px",
                      marginBottom:"20px"
                    }}
                  >
                  <div style={{display:"flex", flexDirection:"column", minWidth: "220px", alignItems:"center", marginBottom:"10px"}}>
                      <div><strong>Idade da criança</strong></div>
                      <div style={{ marginTop: "-10px", width:"260px" }}>
                        <TextField
                          label="Idade"
                          type="text"
                          value={idade}
                          onChange={(event) => setIdade(event.target.value as any)}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                        />
                      </div>
                    </div>

                  <div style={{display:"flex", flexDirection:"column", minWidth: "220px", alignItems:"center", marginBottom:"10px"}}>
                      <div><strong>Já está na escola? Se sim, qual ano?</strong></div>
                      <div style={{ marginTop: "-10px", width:"260px"  }}>
                        <TextField
                          label="Ano escolar "
                          type="text"
                          value={escola}
                          onChange={(event) => setEscola(event.target.value as any)}
                          variant="outlined"
                          margin="normal"
                          fullWidth
                        />
                      </div>
                    </div>

                    </div>

                  <div
                    style={{
                      display: "flex",
                      marginBottom: "20px",
                      flexWrap: "wrap",
                      gap: "10px",
                      justifyContent: "center",
                      padding: "0px 30px"
                    }}
                  >
                   <div style={{display:"flex", flexDirection:"column", width:"260px" , alignItems:"center", marginBottom:"10px"}}>
                      <div><strong>Quanto tempo por dia você passa com seu filho em casa?</strong></div>
                    <div style={{ marginTop: "-10px", width:"260px"  }}>
                      <TextField
                        label="Tempo com filho"
                        type="text"
                        value={height}
                        onChange={(event) => setHeight(event.target.value as any)}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                      />
                      </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"column", width:"260px" , alignItems:"center", marginTop:"auto", marginBottom:"10px"}}>
                      <div><strong>Principal dificuldade do seu filho</strong></div>
                    <div style={{ marginTop: "-10px", width:"260px"  }}>
                      <TextField
                        label="Dificuldades"
                        type="text"
                        value={age}
                        onChange={(event) => setAge(event.target.value as any)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                      />
                    </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "20px",
                      flexWrap: "wrap",
                      gap: "10px",
                      justifyContent: "center",
                      padding: "0px 30px"
                    }}
                  >
                  <div style={{display:"flex", flexDirection:"column", width:"260px" , alignItems:"center", marginBottom:"10px"}}>
                      <div style={{marginBottom:"20px"}}><strong>Seu filho apresenta algum dos transtornos abaixo?</strong></div>
                    <div style={{ marginTop: "-10px", width:"260px" }}>
                      <FormControl
                        fullWidth
                        style={{ marginRight: "25px", marginBottom: "15px", textOverflow: 'ellipsis' }}
                        variant="outlined"
                      >
                        <TextField
                          variant="outlined"
                          value={goal}
                          onChange={(event) => setGoal(event.target.value)}
                          select
                          label="Transtornos"
                        >
                          <MenuItem value="TDA">TDA</MenuItem>
                          <MenuItem value="TDAH">TDAH</MenuItem>
                          <MenuItem value="Autismo">Autismo</MenuItem>
                          <MenuItem value="Dislexia">Dislexia</MenuItem>
                          <MenuItem value="TOD">TOD</MenuItem>
                          <MenuItem value="Nenhum">Nenhum</MenuItem>
                        </TextField>
                      </FormControl>
                      </div>
                    </div>

                    <div style={{display:"flex", flexDirection:"column", width:"260px" , alignItems:"center", marginBottom:"10px"}}>
                      <div style={{marginBottom:"20px"}}><strong>O que você quer mais ver na plataforma</strong></div>
                    <div style={{ marginTop: "-10px", width:"260px", textOverflow: 'ellipsis'  }}>
                      <FormControl fullWidth variant="outlined">
                      <TextField
                          variant="outlined"
                          value={active}
                          onChange={(event) => setActive(event.target.value as any)}
                          select
                          label="Ver na Plataforma"
                        >
                          <MenuItem value="Atividades Práticas">
                          Atividades Práticas
                          </MenuItem>
                          <MenuItem value="Aplicativos Educativos">
                          Aplicativos Educativos
                          </MenuItem>
                          <MenuItem value="Aulas">
                            Aulas
                          </MenuItem>
                          <MenuItem value="Apostilas">
                            Apostilas
                          </MenuItem>
                        </TextField>
                      </FormControl>
                      </div>
                    </div>
                    <Button
                      variant="contained"
                      style={{
                        marginTop: "15px",
                        width: "100%",
                        background: "#008c8c",
                        color: "#fff"
                      }}
                      onClick={handleSubmit}
                    >
                      Montar Plataforma
                    </Button>
                    <span style={{color: 'red'}}>
                      {comment}
                    </span>
                  </div>
                </div>
              )}
              {isBarProgress && <CircularProgress />}
            </form>
          </div>
        </div>
      </>
    );
  }

  if (IsResult) {
    return (
      <>
      <div style={{backgroundColor:"#252531", paddingBottom:"38%",}}>
        <Typography
          variant="h6"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            height: "180px",   
            backgroundColor:"#252531", 
            alignItems:"center"     
          }}
          gutterBottom
        >
          <img src={logo} style={{height:"52%"}}/>
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems:"center",
          }}
        >
          <div style={{ display: "flex", 
                        flexDirection:"column",
                        justifyContent: "center",
                        alignItems:"center", 
                        background: "#f0f0f0",
                        minWidth:"300px",
                        maxWidth:"700px",
                        minHeight:"400px" }}>
            
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                <div style={{display:"flex",
                  flexDirection:"column", justifyContent:"center", marginTop:"20px", alignItems:"center"}}>
                  <img src={done} style={{width:"80px"}}/>
                  <img src={kids} style={{width:"180px"}}/>

                </div>
                <Typography style={{width:"99%"}} variant="h6" gutterBottom>
                Pronto! Já montamos a plataforma de acordo com suas respostas.
                  Acabamos de enviar o acesso para seu e-mail.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Qualquer dúvida, me chame no whatsapp:
                </Typography>

                <a href={`https://wa.me/5538999843095/?text=Acabei de adquirir a Plataforma Aprendizagem Alpha e estou com dúvidas no acesso`}><img src={whatsapp} style={{width:"80px"}}/></a>
              </div>
            </div>
          </div>
          </div>
      </>
    );
  }

  return <></>
}