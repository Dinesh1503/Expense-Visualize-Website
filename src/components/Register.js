// import { useRef, useState, useEffect } from "react";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios"; // Import Axios for making API requests
// import { API_URLS } from "./config"; // Import the API_URLS from the config file

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';

// const Register = () => {
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [validName, setValidName] = useState(false);
//     const [userFocus, setUserFocus] = useState(false);

//     const [email, setEmail] = useState('');
//     const [validEmail, setValidEmail] = useState(false);
//     const [EmailFocus, setEmailFocus] = useState(false);

//     const [pwd, setPwd] = useState('');
//     const [validPwd, setValidPwd] = useState(false);
//     const [pwdFocus, setPwdFocus] = useState(false);

//     const [matchPwd, setMatchPwd] = useState('');
//     const [validMatch, setValidMatch] = useState(false);
//     const [matchFocus, setMatchFocus] = useState(false);

//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setValidName(USER_REGEX.test(user));
//     }, [user])

//     useEffect(() => {
//         setValidPwd(PWD_REGEX.test(pwd));
//         setValidMatch(pwd === matchPwd);
//     }, [pwd, matchPwd])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd, matchPwd])

//     const emailRef = useRef();

//     useEffect(() => {
//     userRef.current.focus();
//     emailRef.current.focus(); 
//     }, []);


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const v1 = USER_REGEX.test(user);
//         const v2 = PWD_REGEX.test(pwd);
    
//         if (!v1 || !v2) {
//           setErrMsg("Invalid Entry");
//           return;
//         }
    
//         try {
//           const response = await axios.post(API_URLS.register, {
//             username: user,
//             email: email,
//             password: pwd,
//           });
    
//           // If the response indicates success, you can set the success state to true
//           if (response.data.success) {
//             setSuccess(true);
//           } else {
//             // Handle registration failure here if the API returns an error
//             setErrMsg("Registration Failed");
//           }
    
//           // Clear form inputs after successful registration
//           setUser("");
//           setPwd("");
//           setMatchPwd("");
//         } catch (err) {
//           // Handle registration error, display error message, etc.
//           if (!err?.response) {
//             setErrMsg("No Server Response");
//           } else if (err.response?.status === 409) {
//             setErrMsg("Username Taken");
//           } else {
//             setErrMsg("Registration Failed");
//           }
//           errRef.current.focus();
//         }
//       };

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     // if button enabled with JS hack
//     //     const v1 = USER_REGEX.test(user);
//     //     const v2 = PWD_REGEX.test(pwd);
//     //     if (!v1 || !v2) {
//     //         setErrMsg("Invalid Entry");
//     //         return;
//     //     }
//     //     try {
//     //         // const response = await axios.post(REGISTER_URL,
//     //         //     JSON.stringify({ user, pwd }),
//     //         //     {
//     //         //         headers: { 'Content-Type': 'application/json' },
//     //         //         withCredentials: true
//     //         //     }
//     //         var myHeaders = new Headers();
//     //         myHeaders.append("Content-Type", "application/json");

//     //         var raw = JSON.stringify({
//     //         "username": user,
//     //         "email": email,
//     //         "password": "123"
//     //         });

//     //         var requestOptions = {
//     //         method: 'POST',
//     //         headers: myHeaders,
//     //         body: raw,
//     //         redirect: 'follow'
//     //         };

//     //         var response = fetch("http://localhost:5000/users", requestOptions)
//     //         .then(response => response.text())
//     //         .then(result => console.log(result))
//     //         .catch(error => console.log('error', error));
            
//     //         console.log(response?.data);
//     //         console.log(response?.accessToken);
//     //         console.log(JSON.stringify(response))
//     //         setSuccess(true);
//     //         //clear state and controlled inputs
//     //         //need value attrib on inputs for this
//     //         setUser('');
//     //         setPwd('');
//     //         setMatchPwd('');

//     //     } catch (err) {
//     //         if (!err?.response) {
//     //             setErrMsg('No Server Response');
//     //         } else if (err.response?.status === 409) {
//     //             setErrMsg('Username Taken');
//     //         } else {
//     //             setErrMsg('Registration Failed')
//     //         }
//     //         errRef.current.focus();
//     //     }
//     // }

//     return (
//         <>
//             {success ? (
//                 <section>
//                     <h1>Success!</h1>
//                     <p>
//                         <a href="#">Sign In</a>
//                     </p>
//                 </section>
//             ) : (
//                 <section>
//                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//                     <h1>Register</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="username">
//                             Username:
//                             <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="text"
//                             id="username"
//                             ref={userRef}
//                             autoComplete="off"
//                             onChange={(e) => setUser(e.target.value)}
//                             value={user}
//                             required
//                             aria-invalid={validName ? "false" : "true"}
//                             aria-describedby="uidnote"
//                             onFocus={() => setUserFocus(true)}
//                             onBlur={() => setUserFocus(false)}
//                         />
//                         <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             4 to 24 characters.<br />
//                             Must begin with a letter.<br />
//                             Letters, numbers, underscores, hyphens allowed.
//                         </p>


//                         <label htmlFor="email">
//                             Email:
//                             <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
//                             </label>
//                             <input
//                             type="text"
//                             id="email"
//                             ref={emailRef} // Change to ref={emailRef}
//                             autoComplete="off"
//                             onChange={(e) => setEmail(e.target.value)} // Change to onChange={(e) => setEmail(e.target.value)}
//                             value={email}
//                             required
//                             aria-invalid={validEmail ? "false" : "true"}
//                             aria-describedby="emailnote" // Change to aria-describedby="emailnote"
//                             onFocus={() => setEmailFocus(true)} // Change to onFocus={() => setEmailFocus(true)}
//                             onBlur={() => setEmailFocus(false)} // Change to onBlur={() => setEmailFocus(false)}
//                             />
//                             <p id="emailnote" className={EmailFocus && email && !validEmail ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             Enter a valid email address.
//                             </p>


//                         <label htmlFor="password">
//                             Password:
//                             <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             onChange={(e) => setPwd(e.target.value)}
//                             value={pwd}
//                             required
//                             aria-invalid={validPwd ? "false" : "true"}
//                             aria-describedby="pwdnote"
//                             onFocus={() => setPwdFocus(true)}
//                             onBlur={() => setPwdFocus(false)}
//                         />
//                         <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             8 to 24 characters.<br />
//                             Must include uppercase and lowercase letters, a number and a special character.<br />
//                             Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
//                         </p>


//                         <label htmlFor="confirm_pwd">
//                             Confirm Password:
//                             <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
//                             <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="password"
//                             id="confirm_pwd"
//                             onChange={(e) => setMatchPwd(e.target.value)}
//                             value={matchPwd}
//                             required
//                             aria-invalid={validMatch ? "false" : "true"}
//                             aria-describedby="confirmnote"
//                             onFocus={() => setMatchFocus(true)}
//                             onBlur={() => setMatchFocus(false)}
//                         />
//                         <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             Must match the first password input field.
//                         </p>

//                         <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
//                     </form>
//                     <p>
//                         Already registered?<br />
//                         <span className="line">
//                             {/*put router link here*/}
//                             <a href="/Login">Sign In</a>
//                         </span>
//                     </p>
//                 </section>
//             )}
//         </>
//     )
// }

// export default Register


import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios"; // Import Axios for making API requests
import { API_URLS } from "./config"; // Import the API_URLS from the config file

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const emailRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [EmailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
    // If registration is successful, redirect to the login page
    if (success) {
        window.location.href = "http://localhost:3000/Login"; // Replace with the correct URL of your login page
    }
    }, [success]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
    
        if (!v1 || !v2) {
          setErrMsg("Invalid Entry");
          return;
        }
    
        try {
          const response = await axios.post(API_URLS.register, {
            username: user,
            email: email,
            password: pwd,
          });
          
          console.log(response);
          console.log(response.data);
          console.log(response.data.success);
    
          // If the response indicates success, you can set the success state to true
          if (response.data.success) {
            setSuccess(true);
          } else {
            // Handle registration failure here if the API returns an error
            setErrMsg("Registration Failed");
          }
    
          // Clear form inputs after successful registration
          setUser("");
          setEmail("");
          setPwd("");
          setMatchPwd("");
        } catch (err) {
          // Handle registration error, display error message, etc.
          if (!err?.response) {
            setErrMsg("No Server Response");
          } else if (err.response?.status === 400) {
            setErrMsg("Username Exists");
          } else {
            setErrMsg("Registration Failed");
          }
          errRef.current.focus();
          console.log(success);
        }
      };

    return (
        <>
            {success ? (
            <section>
                <h1>Success!</h1>
                <p>
                    <a href="/Login">Login In</a>
                </p>
            </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>


                        <label htmlFor="email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="email"
                            ref={emailRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="emailnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="emailnote" className={EmailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Enter a valid email address.
                        </p>


                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/Login">Sign In</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register;
