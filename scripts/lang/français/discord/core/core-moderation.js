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

$.lang.register('moderation.usage', 'Utilisation : !moderation [links / caps / spam / blacklist / whitelist / cleanup / logs / togglecbenni]');
$.lang.register('moderation.links.usage', 'Utilisation : !moderation links [toggle / permittime]');
$.lang.register('moderation.links.toggle', 'La modération de liens est réglé sur $1.');
$.lang.register('moderation.links.permit.time.usage', 'Utilisation : !moderation links permittime [secondes]');
$.lang.register('moderation.links.permit.time.set', 'Le temps de permission est réglé sur $1 secondes!');
$.lang.register('moderation.caps.usage', 'Utilisation : !moderation caps [toggle / triggerlength / limitpercent]');
$.lang.register('moderation.caps.toggle', 'La modération de majuscules est réglée sur $1.');
$.lang.register('moderation.caps.trigger.usage', 'Utilisation : !moderation caps triggerlength [caractères]');
$.lang.register('moderation.caps.trigger.set', 'La limite de majuscules est réglée sur $1%');
$.lang.register('moderation.caps.limit.usage', 'Utilisation : !moderation caps limitpercent [pourcentage]');
$.lang.register('moderation.caps.limit.set', 'La limite de majuscules est réglée sur $1%');
$.lang.register('moderation.long.message.usage', 'Utilisation : !moderation longmessage [toggle / limit]');
$.lang.register('moderation.long.message.toggle', 'La modération de longs messages est réglée sur $1.');
$.lang.register('moderation.long.message.limit.usage', 'Utilisation : !moderation longmessage limit [caractères]');
$.lang.register('moderation.long.message.limit.set', 'La limite de longs messages est réglée sur $1 caractères!');
$.lang.register('moderation.spam.usage', 'Utilisation : !moderation spam [toggle / limit]');
$.lang.register('moderation.spam.toggle', 'La modération de spam est réglée sur $1.');
$.lang.register('moderation.spam.limit.usage', 'Utilisation : !moderation spam limit [messages]');
$.lang.register('moderation.spam.limit.set', 'La limite de spam est réglée sur $1 messages!');
$.lang.register('moderation.blacklist.usage', 'Utilisation : !moderation blacklist [add / remove / list]');
$.lang.register('moderation.blacklist.add.usage', 'Utilisation : !moderation blacklist add [phrase]');
$.lang.register('moderation.blacklist.add.success', 'Phrase ajoutée à la BlackList!');
$.lang.register('moderation.blacklist.remove.usage', 'Utilisation : !moderation blacklist remove [phrase]');
$.lang.register('moderation.blacklist.remove.404', 'Cette phrase n\'est pas dans la BlackList.');
$.lang.register('moderation.blacklist.remove.success', 'Phrase retirée de la BlackList!');
$.lang.register('moderation.blacklist.list.404', 'La BlackList est vide.');
$.lang.register('moderation.blacklist.list', 'BlackList : ```$1```');
$.lang.register('moderation.whitelist.usage', 'Utilisation : !moderation whitelist [add / remove / list]');
$.lang.register('moderation.whitelist.add.usage', 'Utilisation : !moderation whitelist add [phrase ou nomdutilisateur#nombre]');
$.lang.register('moderation.whitelist.add.success', 'Phrase ou nom d\'utilisateur ajouté à la WhiteList!');
$.lang.register('moderation.whitelist.remove.usage', 'Utilisation : !moderation whitelist remove [phrase ou nomdutilisateur#nombre]');
$.lang.register('moderation.whitelist.remove.404', 'Cette phrase ou nom d\'utilisateur n\'est pas dans la WhiteList.');
$.lang.register('moderation.whitelist.remove.success', 'La phrase ou nom d\'utilisateur a été retiré de la WhiteList!');
$.lang.register('moderation.whitelist.list.404', 'La Whitelist est vide.');
$.lang.register('moderation.whitelist.list', 'WhiteList : ```$1```');
$.lang.register('moderation.cleanup.usage', 'Utilisation : !moderation cleanup [channel] [valeur]');
$.lang.register('moderation.cleanup.err', 'Vous ne pouvez supprimer qu\'un nombre compris entre 1 et 10000 messages.');
$.lang.register('moderation.cleanup.failed', 'Échec de la supression massive de messages : Suppression de messages en cours.');
$.lang.register('moderation.cleanup.failed.err', 'Échec de la suppression massive de messages.');
$.lang.register('moderation.cleanup.done', '$1 messages supprimés!');
$.lang.register('moderation.logs.toggle.usage', 'Utilisation : !moderation logs [toggle / channel] - Va activer/désactiver les logs dans un channel Discord.');
$.lang.register('moderation.logs.toggle', 'Les logs de modération Twitch sont maintenant $1. **[Demande un redémarrage du bot]**');
$.lang.register('moderation.logs.channel.usage', 'Utilisation : !moderation logs channel [nom du channel]');
$.lang.register('moderation.logs.channel.set', 'Les annonces de modération des logs Twitch seront maintenant faits dans le channel #$1');
$.lang.register('moderation.cbenni.toggle', 'L\'affichage de lien Cbenni pour la modération est maintenant $1.');