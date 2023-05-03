from flask import Flask

app = Flask(__name__, static_folder="./")


@app.route('/', methods=['GET'])
def index():
    return app.send_static_file("index.html"), 200, [("Cache-Control", "no-cache, no-store, must-revalidate"),
                                                            ("Pragma", "no-cache"), ("Expires", "0"),
                                                            ("Cache-Control", "public, max-age=0")]

@app.route('/_nuxt/<js>', methods=['GET'])
def js(js):
    return app.send_static_file("_nuxt/"+js), 200, [("Cache-Control", "no-cache, no-store, must-revalidate"),
                                                            ("Pragma", "no-cache"), ("Expires", "0"),
                                                            ("Cache-Control", "public, max-age=0")]


@app.route('/img/<img>', methods=['GET'])
def img(img):
    return app.send_static_file("img/"+img), 200, [("Cache-Control", "no-cache, no-store, must-revalidate"),
                                                            ("Pragma", "no-cache"), ("Expires", "0"),
                                                            ("Cache-Control", "public, max-age=0")]


if __name__ == '__main__':
    print('user server started on 8084.')
    app.run(host="0.0.0.0", port=8086)
