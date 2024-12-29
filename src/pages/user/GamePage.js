import React, { useEffect, useState } from 'react'
import '../../assest/css/GamePage.css'
import { GrPrevious } from 'react-icons/gr';
import CardGame from '../../components/user/CardGame';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLevel } from '../../Redux/Actions/Levels';
import img from '../../images/cack3.png'
import img1 from '../../images/dessert-fruitcake.jpg'
import img2 from '../../images/logo.png'
import img3 from '../../images/mind.png'
import img4 from '../../images/user.png'
import img5 from '../../images/dessert-fruitcake.jpg'
import img6 from '../../images/bg_home.jpg'

const GamePage = () => {

    // // get id level
    // const { id } = useParams()

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getLevel(id))
    // }, [id])

    // const levelSearch = useSelector(state => state.Redlevel.Level)
    // // console.log('---------------------', levelSearch)

    // const [number, setnumber] = useState()
    // const [Images, setImages] = useState()
    // const [minLength, setminLength] = useState()


    // useEffect(() => {

    //     const generateArray = async () => {
    //         await setnumber(levelSearch[0].square - 2)
    //         setImages(levelSearch[0].images.map(item => [item, item]).flat())

    //         const swapValues = async () => {
    //             const newTable = [...Images];
    //             const temp = newTable[1];
    //             newTable[1] = newTable[3];
    //             newTable[3] = temp;
    //             setImages(newTable);
    //         };

    //         swapValues()
    //     }
    //     generateArray()
    // }, [levelSearch[0]])


    // // const newArray = [...Images];
    // // useEffect(() => {
    // //     [newArray[1], newArray[3]] = [newArray[3], newArray[1]];

    // // }, [Images])



    // console.log('Images', Images)
    // // console.log('number', number)
    // // console.log('minLength---', minLength)
    // ________________________________________________________________________


    // get id level
    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLevel(id))
    }, [id])


    const [cards, setCards] = useState([]);


    useEffect(() => {
        if (id == 1) {
            setCards([
                { id: 1, value: 'A', flipped: false, matched: false, img: img },
                { id: 2, value: 'B', flipped: false, matched: false, img: img1 },
                { id: 3, value: 'A', flipped: false, matched: false, img: img },
                { id: 4, value: 'B', flipped: false, matched: false, img: img1 },
            ])
        } else if (id == 2) {
            setCards([
                { id: 1, value: 'A', flipped: false, matched: false, img: img3 },
                { id: 2, value: 'C', flipped: false, matched: false, img: img2 },
                { id: 3, value: 'B', flipped: false, matched: false, img: img1 },
                { id: 4, value: 'A', flipped: false, matched: false, img: img3 },
                { id: 5, value: 'C', flipped: false, matched: false, img: img2 },
                { id: 6, value: 'B', flipped: false, matched: false, img: img1 },
            ])
        } else if (id == 3) {
            setCards([
                { id: 1, value: 'A', flipped: false, matched: false, img: img3 },
                { id: 2, value: 'C', flipped: false, matched: false, img: img2 },
                { id: 3, value: 'D', flipped: false, matched: false, img: img4 },
                { id: 4, value: 'B', flipped: false, matched: false, img: img1 },
                { id: 5, value: 'A', flipped: false, matched: false, img: img3 },
                { id: 6, value: 'D', flipped: false, matched: false, img: img4 },
                { id: 7, value: 'C', flipped: false, matched: false, img: img2 },
                { id: 8, value: 'B', flipped: false, matched: false, img: img1 },
            ])
        } else if (id == 4) {
            setCards([
                { id: 1, value: 'A', flipped: false, matched: false, img: img3 },
                { id: 2, value: 'C', flipped: false, matched: false, img: img2 },
                { id: 3, value: 'D', flipped: false, matched: false, img: img4 },
                { id: 4, value: 'E', flipped: false, matched: false, img: img5 },
                { id: 5, value: 'B', flipped: false, matched: false, img: img1 },
                { id: 6, value: 'A', flipped: false, matched: false, img: img3 },
                { id: 7, value: 'D', flipped: false, matched: false, img: img4 },
                { id: 8, value: 'E', flipped: false, matched: false, img: img5 },
                { id: 9, value: 'E', flipped: false, matched: false, img: img5 },
                { id: 10, value: 'C', flipped: false, matched: false, img: img2 },
                { id: 11, value: 'B', flipped: false, matched: false, img: img1 },
            ])
        } else if (id == 5) {
            setCards([
                { id: 1, value: 'A', flipped: false, matched: false, img: img3 },
                { id: 2, value: 'C', flipped: false, matched: false, img: img2 },
                { id: 3, value: 'D', flipped: false, matched: false, img: img4 },
                { id: 4, value: 'F', flipped: false, matched: false, img: img6 },
                { id: 5, value: 'E', flipped: false, matched: false, img: img5 },
                { id: 6, value: 'B', flipped: false, matched: false, img: img1 },
                { id: 7, value: 'A', flipped: false, matched: false, img: img3 },
                { id: 8, value: 'D', flipped: false, matched: false, img: img4 },
                { id: 9, value: 'F', flipped: false, matched: false, img: img6 },
                { id: 10, value: 'E', flipped: false, matched: false, img: img5 },
                { id: 11, value: 'C', flipped: false, matched: false, img: img2 },
                { id: 12, value: 'B', flipped: false, matched: false, img: img1 },
            ])
        }
    }, [])





    const [selectedCardIds, setSelectedCardIds] = useState([]);
    const [isChecking, setIsChecking] = useState(false);
    const [clickCount, setClickCount] = useState(0);


    useEffect(() => {
        if (selectedCardIds.length === 2) {
            setIsChecking(true);

            const [card1Id, card2Id] = selectedCardIds;
            const card1 = cards.find((card) => card.id === card1Id);
            const card2 = cards.find((card) => card.id === card2Id);

            if (card1.value === card2.value) {
                setCards((prevCards) =>
                    prevCards.map((card) => {
                        if (card.id === card1Id || card.id === card2Id) {
                            return { ...card, flipped: true, matched: true };
                        }
                        return card;
                    })
                );
            } else {
                setTimeout(() => {
                    setCards((prevCards) =>
                        prevCards.map((card) => {
                            if (card.id === card1Id || card.id === card2Id) {
                                return { ...card, flipped: false };
                            }
                            return card;
                        })
                    );
                }, 1000);
            }

            setSelectedCardIds([]);
            setIsChecking(false);
            setClickCount((prevCount) => prevCount + 1);

        }
    }, [selectedCardIds, cards]);

    const handleCardClick = (cardId) => {
        const clickedCard = cards.find((card) => card.id === cardId);

        if (!clickedCard.flipped && !clickedCard.matched && !isChecking) {
            setCards((prevCards) =>
                prevCards.map((card) => {
                    if (card.id === cardId) {
                        return { ...card, flipped: true };
                    }
                    return card;
                })
            );

            setSelectedCardIds((prevSelectedCardIds) => [...prevSelectedCardIds, cardId]);
        }
    };

    const getCardStyle = (card) => {
        const baseStyles = {
            display: 'inline-block',
            width: '100px',
            height: '100px',
            border: '1px solid #000',
            margin: '10px',
            padding: '20px',
            fontSize: '24px',
            textAlign: 'center',
            transition: 'transform 0.3s',
            transformStyle: 'preserve-3d',
        };

        const flippedStyles = {
            backgroundColor: '#fff',
            cursor: 'pointer',
            transform: 'rotateY(180deg)',
        };

        const matchedStyles = {
            backgroundColor: 'lightgreen',
        };

        const defaultStyles = {
            backgroundColor: 'lightblue',
            cursor: 'pointer',
        };

        return {
            ...baseStyles,
            ...(card.flipped ? flippedStyles : {}),
            ...(card.matched ? matchedStyles : defaultStyles),
        };
    };


    return (
        <div className='GamePage'>

            <div className='sectionTop-game'>
                <p> Level {id} </p>
                <p> Click : {clickCount} </p>
                <p> Score 300 </p>
                <div>  </div>
            </div>


            <div className='sectionCenter-game'>
                <div className='ContainerCars' style={{ width: '35rem' }}>

                    {
                        cards &&
                        cards.map((card) => (

                            <div key={card.id} style={getCardStyle(card)} onClick={() => handleCardClick(card.id)} >
                                <img src={card.flipped && !card.matched ? card.img : 'A'} alt='img' style={{ width: '100%' }} />

                            </div>
                        ))}

                </div>
            </div>


            <div className='design-game-1'></div>
            <div className='design-game-2'></div>

            <div className='sectionBottom-game'>
                <a className='btn'> <GrPrevious className='icon' /> Back  </a>
            </div>

        </div>
    )
}

export default GamePage