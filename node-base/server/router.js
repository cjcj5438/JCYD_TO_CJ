function route(pathname,response) {
    if (pathname == "/") {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    } else if (pathname == "/index/home") {
        response.end('index');
    }else{
        response.end("404")
    }
}

exports.route = route;