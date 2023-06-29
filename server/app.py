from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route('/api', methods=['GET'])
def test():
    return "API"

# Example endpoint to receive data from Angular
@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.get_json()
    # Process the received data
    # ...

    # Return a response
    response = {'message': 'Data received successfully'}
    return jsonify(response)

# Example endpoint to send data to Angular
@app.route('/api/data', methods=['GET'])
def send_data():
    # Prepare data to send to Angular
    data = {'name': 'Johnytf', 'age': 30}
    # ...

    # Return the data as JSON response
    return jsonify(data)





@app.route('/', methods=['GET'])
def home():
    return "API"

if __name__ == '__main__':
    app.run(debug=True)
