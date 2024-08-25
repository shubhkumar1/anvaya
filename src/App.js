import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import Navbar from './Navbar';
import './App.css';

function App() {

	const [userCode, setUserCode] = useState(``);
	const [userLang, setUserLang] = useState(`python3`);
	const [userTheme, setUserTheme] = useState(`vs-dark`);
	const [fontSize, setFontSize] = useState(`20`);
	const [userInput, setUserInput] = useState(``);
	const [userOutput, setUserOutput] = useState(``);
	const [loading, setLoading] = useState("false");

	const options = {
		fontSize: fontSize
	}

	async function compile() {

		setLoading("true");

		let headersList = {
			"Content-Type": "application/json"
		}
		let version;
		if (userLang === "python3") {
			version = "3.10.0"
		}
		else if (userLang === "java") {
			version = "15.0.2"
		}
		else if (userLang === "c" || userLang === "cpp") {
			version = "10.2.0"
		}

		let bodyContent = JSON.stringify({
			"language": userLang,
			"version": version,
			"files": [
				{
					"name": "main",
					"content": userCode
				}
			],
			"stdin": userInput
		});

		let response = await fetch("https://emkc.org/api/v2/piston/execute", {
			method: "POST",
			body: bodyContent,
			headers: headersList,
		});
		try {
			let data = await response.json();
			console.log(data);
			setUserOutput(data.run.stdout || data.run.stderr);
			setLoading("false");
		}
		catch (error) {
			console.log(error);
			setUserOutput("Error: " + (error.response ? error.response.data.error : error.message));
			setLoading("false");
		}

		// const options = {
		// 	url: "https://emkc.org/api/v2/piston/execute",
		// 	method: 'POST',
		// 	headers: {
		// 		"Accept": "*/*",
		// 		"Authorization": "a3eebabdc5c6260cd9d73d36aa12a98c",
		// 		"Content-Type": "application/json"
		// 	},
		// 	body: {
		// 		"language": userLang,
		// "version": version,
		// "files": [
		// 	{
		// 		"name": "main",
		// 		"content": userCode
		// 	}
		// ],
		// "stdin": userInput
		// 	}
		// };

		// try {
		// 	const response = await axios.request(options);
		// 	
		// } catch (error) {
		// 	console.error(error);
		// }
	}

	let bgColor;
	if (userTheme === "vs-dark") {
		bgColor = "#1e1e1e";
	}


	return (
		<div style={{
			backgroundColor: bgColor
		}}>
			<Navbar
				userLang={userLang} setUserLang={setUserLang}
				userTheme={userTheme} setUserTheme={setUserTheme}
				fontSize={fontSize} setFontSize={setFontSize} compile={compile}
			/>
			<div style={{
				display: "flex",
				justifyContent: "space-evenly"
			}}>
				<Editor
					options={options}
					height="calc(100vh - 50px)"
					width="60vw"
					theme={userTheme}
					language={userLang}
					defaultLanguage='python'
					defaultValue="// Enter your code here"

					onChange={(value) => {
						setUserCode(value)
					}}
				/>


				<div style={{
					backgroundColor: "#1e1e1e",
					padding: "5px 10px",
					borderRadius: "10px"
				}}>

					<div style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						color: 'white',
						width: "100%"
					}}>
						<input type='text' placeholder='Input' style={{
							width: "100%",
							height: "50px",
							borderRadius: "10px",
							fontSize: "1.5rem"
						}} onChange={(e) => setUserInput(e.target.value)} />
						<h2>Output : </h2>
					</div>

					{
						loading === "true" ? (
							<div style={{
								width: "35vw",
								margin: "auto",
								display: 'flex',
								justifyContent: 'center',
								flexDirection: 'column',
								alignItems: 'center',
								color: "white"
							}}>
								<span class="loader" />
								<h3>Loading...</h3>
							</div>
						) : (
							<pre style={{
								fontSize: "1.5rem",
								fontFamily: "Nanum Gothic Coding, monospace",
								fontWeight: "400",
								width: "35vw",
								margin: "0",
								color: 'white',
								overflow: "auto"
							}}>{userOutput}</pre>
						)
					}

				</div>
			</div>

		</div>
	);



}

export default App;