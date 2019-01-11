/*
 * Copyright (C) 2016-2018 phantombot.tv
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

$.lang.register('discord.customcommands.addcom.usage', 'Utilisation : !addcom [commande] [réponse]');
$.lang.register('discord.customcommands.addcom.err', 'Cette commande existe déjà.');
$.lang.register('discord.customcommands.addcom.success', 'La commande !$1 a été ajoutée!');
$.lang.register('discord.customcommands.editcom.usage', 'Utilisation : !editcom [commande] [réponse]');
$.lang.register('discord.customcommands.editcom.404', 'Cette commande n\'existe pas.');
$.lang.register('discord.customcommands.editcom.success', 'La commande !$1 a été éditée!');
$.lang.register('discord.customcommands.delcom.usage', 'Utilisation : !delcom [commande] [réponse]');
$.lang.register('discord.customcommands.delcom.404', 'Cette commande n\'existe pas.');
$.lang.register('discord.customcommands.delcom.success', 'La commande !$1 a été supprimée!');
$.lang.register('discord.customcommands.permcom.usage', 'Utilisation : !permcom [commande] [permission]');
$.lang.register('discord.customcommands.permcom.404', 'Cette commande n\'existe pas.');
$.lang.register('discord.customcommands.permcom.syntax.error', 'Utilisation : !permcom [commande] [permission] - Soit 0 pour tout le monde ou 1 pour les administrateurs.');
$.lang.register('discord.customcommands.permcom.success', 'Les permissions pour la commande !$1 ont été réglées sur $2');
$.lang.register('discord.customcommands.coolcom.usage', 'Utilisation: !coolcom [commande] [temps en secondes]');
$.lang.register('discord.customcommands.coolcom.404', 'Cette commande n\'existe pas.');
$.lang.register('discord.customcommands.coolcom.removed', 'Le cooldown pour la commande !$1 a été supprimé.');
$.lang.register('discord.customcommands.coolcom.success', 'Le cooldown pour la commande !$1 a été réglé sur $2 secondes.');
$.lang.register('discord.customcommands.channelcom.usage', 'Utilisation : !channelcom [commande] [channel / --global / --list] - Séparez les channels avec une virgule ou un tiret si nécessaire.');
$.lang.register('discord.customcommands.channelcom.global', 'La commande !$1 fonctionnera maintenant dans tout les channels.');
$.lang.register('discord.customcommands.channelcom.success', 'La commande !$1 ne fonctionnera maintenant que dans le(s) channel(s): #$2.');
$.lang.register('discord.customcommands.channelcom.404', 'Aucun channel n\'est précisé pour cette commande.');
$.lang.register('discord.customcommands.commands', 'Commandes : $1');
$.lang.register('discord.customcommands.bot.commands', 'Commandes du bot : $1');
$.lang.register('discord.customcommands.pricecom.usage', 'Utilisation : !pricecom [commande] [montant]');
$.lang.register('discord.customcommands.pricecom.success', 'Le coût pour la commande !$1 a été réglé sur  $2.');
$.lang.register('discord.customcommands.aliascom.usage', 'Utilisation : !aliascom [alias] [commande]');
$.lang.register('discord.customcommands.aliascom.success', 'La commande !$2 a été aliasée comme étant !$1');
$.lang.register('discord.customcommands.delalias.usage', 'Utilisation : !delalias [alias]');
$.lang.register('discord.customcommands.delalias.success', 'L\'alias !$1 a été supprimé.');
$.lang.register('discord.customcommands.404', 'Cette commande n\'existe pas.');
$.lang.register('discord.customcommands.alias.404', 'Cet alias n\'existe pas.');
$.lang.register('discord.customcommands.customapi.404', 'La commande !$1 demande des paramètres.');
$.lang.register('discord.customcommands.customapijson.err', '!$1: Une erreur est survenue lors de la requête API.');