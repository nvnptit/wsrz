var body = $response.body;
var obj = JSON.parse(body);

obj.profile.is_premium = true,
obj.profile.end_of_premium = 4085452799,
obj.profile._end_of_premium = "2099-09-09 17:07:45"

body = JSON.stringify(obj);
$done({body});
