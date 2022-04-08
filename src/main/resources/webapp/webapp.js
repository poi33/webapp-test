const portal = require('/lib/xp/portal');


exports.get = function (req) {
    const url = portal.url({
        path: "/", type: "absolute",
    });

    log.info(url);

    return {
        contentType: 'application/json',
        body: JSON.stringify({
            url,
        }),
    }
}