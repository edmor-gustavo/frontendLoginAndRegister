import {  useState } from "react";
import axios from "axios";

function Register() {

    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8085/api/v1/employee/save", {
                employeename: employeename,
                email: email,
                password: password,
            });
            alert("Fumcioinario Registado Com Sucesso!");

        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <div class="container mt-4" >
                <div class="card">
                    <h1>Registro do Funcionario</h1>

                    <form>
                        <div class="form-group">
                            <label>Nome do Funcionario</label>
                            <input type="text"  class="form-control" id="employeename" placeholder="Introduza o Nome"

                                   value={employeename}
                                   onChange={(event) => {
                                       setEmployeename(event.target.value);
                                   }}
                            />

                        </div>

                        <div class="form-group">
                            <label>email</label>
                            <input type="email"  class="form-control" id="email" placeholder="Introduza o Email"

                                   value={email}
                                   onChange={(event) => {
                                       setEmail(event.target.value);
                                   }}

                            />

                        </div>

                        <div class="form-group">
                            <label>password</label>
                            <input type="password"  class="form-control" id="password" placeholder="Introduza a password"

                                   value={password}
                                   onChange={(event) => {
                                       setPassword(event.target.value);
                                   }}

                            />
                        </div>

                        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Salvar</button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;