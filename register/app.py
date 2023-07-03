from flask import Flask, request, jsonify
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/guardar_usuario', methods=['POST'])
def guardar_usuario():
    data = request.json

    usuario = data.get('usuario')
    correo = data.get('correo')
    contraseña = data.get('contraseña')

    # Aquí puedes realizar las operaciones para guardar los datos del usuario en una base de datos o archivo
    # Por ejemplo, para guardar los datos en un archivo de texto:
    with open('usuarios.txt', 'a') as file:
        file.write(f'Usuario: {usuario}\n, Correo: {correo}\n, Contraseña: {contraseña}\n')

    response = {'message': 'Usuario guardado correctamente'}
    return jsonify(response)

if __name__ == '__main__':
    app.debug = True
    app.run()