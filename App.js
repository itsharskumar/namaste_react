const parent=React.createElement(
    "div",{id:"parent"},
        React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"I am a big guy"),
                React.createElement("h2",{},"I am his brother")
            ]
        )
    
);//this is a object not a html tag it is converted using redring convert it into html
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);