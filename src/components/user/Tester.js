import React, { useState, useEffect } from 'react';
import img from '../../images/cack3.png'
import img1 from '../../images/dessert-fruitcake.jpg'
import img2 from '../../images/logo.png'
import img3 from '../../images/mind.png'


const MemoryGame = () => {
    const [cards, setCards] = useState([
        { id: 1, value: 'A', flipped: false, matched: false , img:img },
        { id: 2, value: 'B', flipped: false, matched: false , img:img1 },
        { id: 3, value: 'A', flipped: false, matched: false , img:img },
        { id: 4, value: 'B', flipped: false, matched: false , img:img1 },
    ]);

    const [selectedCardIds, setSelectedCardIds] = useState([]);
    const [isChecking, setIsChecking] = useState(false);

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
        <div style={{ textAlign: 'center' }}>
            {cards.map((card) => (

                <div key={card.id} style={getCardStyle(card)}  onClick={() => handleCardClick(card.id)} >
                    <img src={card.flipped && !card.matched ? card.img : 'A'} alt='img' style={{width:'100%'}} />
                    
                </div>
            ))}
        </div>
    );
};

export default MemoryGame;
