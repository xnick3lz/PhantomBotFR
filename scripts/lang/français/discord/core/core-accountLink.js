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

$.lang.register('discord.accountlink.usage.nolink', 'Pour pouvoir utiliser ce module, veuillez vous assurer que le bot puisse vous MP sur Discord.\nPour lier Discord et Twitch, veuillez utiliser la commande suivante **!account link**');
$.lang.register('discord.accountlink.usage.link', 'Votre compte Discord est actuellement lié à **https://twitch.tv/$1**.\nVous pouvez modifier le compte lié en utilisant **!account link** ou le retirer en utilisant **!account remove**');
$.lang.register('discord.accountlink.link', '**NOTE: Ce message expire dans 10 minutes**.\nPour pouvoir lier vos comptes Discord et Twitch, rendez-vous sur **https://twitch.tv/$1**, et tapez la commande **!account link $2**');
$.lang.register('discord.accountlink.link.relink', '**NOTE: Ce message expire dans 10 minutes**.\n**Ceci va automatiquement retirer le dernier compte lié.** \nPour compléter la liaison entre vos comptes Discord et Twitch, veuillez vous connecter à Twitch, allez sur **https://twitch.tv/$1**, et tapez la commande **!account link $2**');
$.lang.register('discord.accountlink.link.success', 'Votre compte discord a été correctement lié à **https://twitch.tv/$1**.\nVeuillez noter que si votre nom Twitch change, vous devrer refaire l\'opération.');
$.lang.register('discord.accountlink.link.fail', 'Désolé, ce token a expiré. Soyez sûrs que la commande soit correcte. Si vous êtes certain d\'avoir tapé la commande correctement, veuillez relancer le procédé de liaison de compte depuis un channel de chat sur le serveur Discord.');
$.lang.register('discord.accountlink.link.remove', 'Votre compte Discord a été délié de tout compte Twitch.\nPour lier votre compte Discord à Twitch, veuillez utiliser **!account link** dans une channel de chat sur le serveur Discord.');
$.lang.register('discord.accountlink.linkrequired', 'Désolé, cette commande n\'est disponible qu\'après avoir créé une liaison avec votre compte Twitch réalisée grâce à la commande **!account**');