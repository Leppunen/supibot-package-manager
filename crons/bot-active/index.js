module.exports = {
	Name: "bot-active",
	Expression: "0 */10 * * * *",
	Defer: null,
	Type: "Bot",
	Code: (async function verifyBotAcitivity () {
		const userData = await sb.User.get(sb.Config.get("SELF_ID"));
		await sb.Got.instances.Supinic({
			method: "PUT",
			url: "bot-program/bot/active",
			headers: {
				Authorization: `Basic ${userData.ID}:${userData.Data.authKey}`,
			}
		});
	})
};