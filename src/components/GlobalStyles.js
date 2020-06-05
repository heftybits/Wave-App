import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 

body {
	font-weight: 400;
	font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
		"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
	transition: all 0.15s linear;
}

#spacing {
	margin: auto;
	margin: 30px;
	padding-top: 10px;
}

.greeting {
	text-align: left;
	font-weight: 800;
}

.time {
	text-align: left;
	color: #979498;
	font-family: Inconsolata, sans-serif;
}

.switch {
	margin: 20px;
	text-align: left;
	font-family: Inconsolata, sans-serif;
}

button {
	background: none;
  font-size:1em;
	font-family: Inconsolata, sans-serif;
	color: ${({ theme }) => theme.text};
	border: none;
	cursor: pointer;
	transition: all .4s ease; 
}

button:focus {
	outline:0;
	}

button:hover {
	color: #7E6FFF !Important;
}

.emoji-fix {
	padding-right: 10px;
}

span.wave{
	animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: 2;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
    0% { transform: rotate(  0.0deg) }
   10% { transform: rotate(-10.0deg) }
   20% { transform: rotate( 12.0deg) }
   30% { transform: rotate(-10.0deg) }
   40% { transform: rotate(  9.0deg) }
   50% { transform: rotate(  0.0deg) }
  100% { transform: rotate(  0.0deg) }
}


`;
