const baseApiURL = "http://192.168.0.15:8080/api/"

export async function clientGetGames(){
    //Faço a requisição com o endpoint da api
    const response = await fetch(`${baseApiURL}games`)

    //Agora extraio o JSON que recebi da api
    const json = await response.json()

    return json
}

export async function clientSendingVotes(id: number){

  const myInit : RequestInit = {
    method: 'PATCH',
    redirect: 'follow'
  };
  
  fetch(`${baseApiURL}games/${id}/vote`, myInit)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export async function clientGetWinner(){
    const response = await fetch(`${baseApiURL}games`)
    const json = await response.json()
    return json[0]
}