import React, { createContext, useContext, useState } from 'react'

export const AppContext = createContext();

export default function AppProvider({children}) {
    const [data, setData] = useState([
        {id: 1, name: "John", post: "Just finished reading an incredible novel, and I can’t stop thinking about it. The way a good book can transport you into another world, make you feel every emotion, and leave you reflecting on life is truly magical. If you have any book recommendations, drop them below—I’m always on the lookout for my next great read!"},
        {id: 2, name: "Ken", post: "Mornings set the tone for the entire day, and I’ve been working on establishing a routine that keeps me energized and focused. Starting my day with a cup of coffee, journaling for five minutes, and setting clear goals has helped me become more productive. What’s your favorite morning ritual?"},
        {id: 3, name: "Kikyam", post: "Learning to code has been a rollercoaster ride. Some days, everything clicks, and I feel unstoppable. Other days, a single bug keeps me up for hours. But one thing’s for sure—every challenge is an opportunity to grow. To all the fellow coders out there, what’s the biggest problem you've solved recently?"},
        {id: 4, name: "Jean", post: "I tried making my own pizza from scratch today, and let’s just say… it didn’t quite turn out like the pictures. 😅 Still, there’s something so satisfying about cooking at home. Do you prefer making your favorite dishes or eating out? What’s one dish you’ve always wanted to perfect?"},
        {id: 5, name: "Cath", post: "I’ve always wondered—if time travel were real, would I go back to witness historic events or fast forward to see what the future holds? The idea of experiencing different eras firsthand is mind-blowing. If you could travel to any time, past or future, where would you go and why?"},
        {id: 6, name: "Aaron", post: "Sometimes, we get so caught up in the big moments that we forget to appreciate the little things—watching the sunset, hearing a favorite song unexpectedly, a warm hug from a friend. What’s one small thing that made your day better today?"},
        {id: 7, name: "Joe", post: "Decided to switch things up and challenge myself with a new workout plan. The soreness is real, but I already feel stronger and more energized. If you’ve ever pushed yourself outside your fitness comfort zone, what was your experience like? Let’s motivate each other!"},
        {id: 8, name: "Diddy", post: "I’ve been dreaming of traveling again, and my bucket list just keeps growing! Japan, Greece, Iceland—so many places to explore. If you could drop everything and travel to one place right now, where would it be and why?"},
        {id: 9, name: "West", post: "Nothing beats a weekend with cozy blankets, a lineup of great movies, and absolutely no responsibilities. Just pure relaxation. What’s your go-to movie for a lazy day? Any recommendations for hidden gem films?"},
    ])

    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)