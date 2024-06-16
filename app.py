from flask import Flask, render_template, request, jsonify
import time

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    name = request.form['name'],
    gender = request.form['gender'],
    age = request.form['age'],
    currentStatus = request.form['currentStatus'],
    wantToDo = request.form['wantToDo'],
    
    data = {"name":name[0], "gender":gender[0], "age":age[0], "currentStatus":currentStatus[0], "wantToDo":wantToDo[0]}
    
    # ここで質問に対する処理を行い、回答を生成する
    response = str(question_gpt(data))
    return jsonify(response=response)

def question_gpt(data):

    a = "あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお"
    return a

if __name__ == '__main__':
    app.run(debug=True)
