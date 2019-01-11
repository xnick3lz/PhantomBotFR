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

$.lang.register('discord.gambling.need.points', 'Tu n\'as pas assez de $1.');
$.lang.register('discord.gambling.error.max', 'Le maximum à parier est actuellement de $1.');
$.lang.register('discord.gambling.error.min', 'Le minimum à parier est actuellement de $1.');
$.lang.register('discord.gambling.lost', '$1 a fait tomber le dé sur $2 et a perdu $3. $5'); // Use $4 for the points the user has remaining
$.lang.register('discord.gambling.won', '$1 a fait tomber le dé sur $2 et a gagné $3! $5'); // Use $4 for the points the user has remaining
$.lang.register('discord.gambling.usage', 'Utilisation : !gamble [montant]');
$.lang.register('discord.gambling.set.max.usage', 'Utilisation : !gambling setmax [montant]');
$.lang.register('discord.gambling.set.max', 'Paris maximum réglé sur $1!');
$.lang.register('discord.gambling.set.min.usage', 'Utilisation : !gambling setmin [montant]');
$.lang.register('discord.gambling.set.min', 'Paris minimum réglé sur $1!');
$.lang.register('discord.gambling.win.range.usage', 'Utilisation : !gambling setwinningrange [fourchette]');
$.lang.register('discord.gambling.win.range', 'Fourchette de victoire de paris réglée sur $1-100 et fourchette de perte réglée sur 1-$2');
$.lang.register('discord.gambling.percent.usage', 'Utilisation : !gambling setgainpercent [montant]');
$.lang.register('discord.gambling.percent', 'Pourcentage de gain des paris réglé sur $1%');
$.lang.register('discord.gambling.main.usage', 'Utilisation : !gambling [setmax / setmin / setwinningrange / setgainpercent]');