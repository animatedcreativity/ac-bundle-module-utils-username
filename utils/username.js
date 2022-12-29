exports = module.exports = exports = module.exports = function() {
  var mod = {
    valid: function(value) {
      var re = /^\w+$/;
      return re.test(value) && value.length >= 5;
    },
    exists: async function(username) {
      var {users, error} = await app.api.mysql.request("users", function(data) {}, `
        SELECT
          *
        FROM \`user\`
        WHERE
          \`username\`=` + app.api.mysql.escape(username) + `
      `, "list");
      if (app.has(users)) {
        return users.length > 0;
      } else {
        return true;
      }
    }
  };
  return mod;
}