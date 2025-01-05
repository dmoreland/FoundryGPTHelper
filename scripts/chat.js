Hooks.on("chatMessage", (chatLog, messageText, chatData) => {
    if (messageText.startsWith("/roll")) {
      const rollFormula = messageText.slice(6).trim() || "1d20";
      const roll = new Roll(rollFormula).roll({ async: false });
      ChatMessage.create({
        content: `You rolled: <strong>${roll.total}</strong> (${rollFormula})`,
      });
      return false;
    }
  });
  