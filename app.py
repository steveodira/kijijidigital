from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/work")
def work():
    return render_template("work.html")  # Updated route for Our Work

@app.route("/get_involved")
def get_involved():
    return render_template("get_involved.html")

if __name__ == "__main__":
    app.run(debug=True)