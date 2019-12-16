const RANDOM_CARD = 'http://localhost:3000/cards/random/1';
let modalActive = false;
let journeyPersisted = false;
let characterPersisted = false;
const pointsModal = document.querySelector('div#modal');

const pointState = {
  journey: {
    point1: {
      cards: [],
      description: "",
    },
    point2: {
      cards: [],
      description: "",
    },
    point3: {
      cards: [],
      description: "",
    },
    point4: {
      cards: [],
      description: "",
    },
    point5: {
      cards: [],
      description: "",
    },
    point6: {
      cards: [],
      description: "",
    },
    point7: {
      cards: [],
      description: "",
    },
    point8: {
      cards: [],
      description: "",
    },
    point9: {
      cards: [],
      description: "",
    },
    point10: {
      cards: [],
      description: "",
    },
    point11: {
      cards: [],
      description: "",
    },
    point12: {
      cards: [],
      description: "",
    }
  },
  character: {
    p1: {
      cards: [],
      description: "",
    },
    p2: {
      cards: [],
      description: "",
    },
    p3: {
      cards: [],
      description: "",
    },
    p4: {
      cards: [],
      description: "",
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  handlePointStateOnIndex();
  cardsOpenPointMenuModal();
  // cardsInPointCanDraw();
});

const handlePointStateOnIndex = function() {
  // handleif journey is loaded
  const pointContainerNodes = document.getElementsByClassName('point-container');
  for (const node of pointContainerNodes ) {
    // switch (getPointStage(node)){
    //   case 'stage1':
    //     node.querySelector('img').src = 'assets/card-images/x-small.jpg';
    //     break;
    //   case 'stage2':
    //     break;
    //   case 'stage3':
    //     break;
    // }
  }
}

const cardsOpenPointMenuModal = function() {
  const cardContainerNodes = document.getElementsByClassName('point-container');
  
  for (const node of cardContainerNodes) {
    node.addEventListener('click', function(event) {
      let pointMenuNode = characterOrJourneyPointsMenu(event, node);
      modalCanOpen(event, pointMenuNode);
      document.getElementById('modal').addEventListener('click', event => {
        modalCanClose(event, node);
      });
    }); 
  };
};

const modalCanOpen = function(event, pointMenuNode) {
  modalActive = true;
  pointsModal.style.display = 'block';
  pointMenuNode.style.display = 'block';
  pointMenuNode.classList.add("visible");
}

const modalCanClose = function(event, nodeClicked) {
  if (event.target === pointsModal && modalActive === true) {
    modalActive = false;
    
    let pointMenuNode = document.querySelector('.points-menu');
    unloadMenuNode(pointMenuNode);
    pointMenuNode.style.display = 'none';
    pointMenuNode.classList.remove("visible");
    pointsModal.style.display = 'none';
  };
}

const characterOrJourneyPointsMenu = function(event, nodeClicked) {
  let pointMenuNode = document.querySelector('div.points-menu');
  if ([...event.target.classList].includes('character')) {;
    pointMenuNode.classList.add('character')
    loadCharacterPointContent(pointMenuNode, nodeClicked);
  } else {
    console.log(nodeClicked.classList[2])
    pointMenuNode.classList.add('journey', nodeClicked.classList[2])
    loadJourneyPointContent(pointMenuNode, nodeClicked);
  };
  return pointMenuNode;
};

const unloadMenuNode = function(menu) {
  if ([...menu.classList].includes('character')) {

  } else {
    menu.querySelector('h2.points-menu.header-content').innerText = "";
    menu.querySelector('p.points-menu.info-content').innerText = ""
  };
  
  menu.className = 'points-menu container'

  for (const column of menu.getElementsByClassName('column')) {
    while (column.lastChild) {
      column.removeChild(column.lastChild);
    };
  };
  
}

const loadCharacterPointContent = function(pointMenuNode, nodeClicked) {
  console.log(nodeClicked);
}





// Pull card image based on api
// fetch('http://localhost:3000/cards/random/1')
// .then(resp => resp.json())
// .then(obj => function() {
// 	let card1 = document.createElement('img');
//   if (obj[0].card_type === 'major') {
//     card1.src = `assets/card-images/${obj[0].card_type}/${obj[0].value}.jpg`;
//   } else {
//     card1.src = `assets/card-images/${obj[0].card_type}/${obj[0].suit}/${obj[0].value}.jpg`;
//   }
  
// 	document.body.appendChild(card1);
// }());
