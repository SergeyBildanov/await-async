import GameSavingLoader from "./GameSavingLoader";
(async ()=>{
  try{
    let saving = await GameSavingLoader.load();
    console.log(saving);
  }catch(e){
    console.log(e);
  }
})()
