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

$.lang.register('customcommands.add.error', 'Cette commande existe déjà!');
$.lang.register('customcommands.add.success', 'La commande !$1 a été créée!');
$.lang.register('customcommands.add.usage', 'Utilisation: !addcom (commande) (message)');
$.lang.register('customcommands.add.commandtag.notfirst', 'Le tag (commande) doit être au début d\'une commande personnalisée quand elle est utilisée.');
$.lang.register('customcommands.add.commandtag.invalid', 'Le tag (commande) n\'existe pas : $1');
$.lang.register('customcommands.alias.delete.error.alias.404', 'L\'alias n\'existe pas : !$1');
$.lang.register('customcommands.alias.delete.success', 'L\'alias !$1 a été supprimé avec succès!');
$.lang.register('customcommands.alias.delete.usage', 'Utilisation: !delalias (nom d\'alias)');
$.lang.register('customcommands.alias.error', 'Un alias existe déjà pour !$1. Supprimez le d\'abord.');
$.lang.register('customcommands.alias.error.target404', 'La commande visée n\'existe pas!');
$.lang.register('customcommands.alias.error.exists', 'La commande que vous voulez mettre comme alias existe déjà.');
$.lang.register('customcommands.add.disabled', 'Cette commande est actuellement désactivée. Réactivez la commade ou supprimez la pour ajouter une nouvelle commande avec ce nom.');
$.lang.register('customcommands.alias.success', 'La commande !$1 a été correctement aliasée en !$2');
$.lang.register('customcommands.alias.usage', 'Utilisation: !aliascom (nom d\'alias) (commande existante) [paramètres optionnels]');
$.lang.register('customcommands.delete.success', 'La commande !$1 a été supprimée!');
$.lang.register('customcommands.delete.usage', 'Utilisation: !delcom (commande)');
$.lang.register('customcommands.edit.404', 'Vous ne pouvez pas remplacer une commande par défaut.');
$.lang.register('customcommands.set.perm.error.target404', 'La commande !$1 n\'existe pas!');
$.lang.register('customcommands.set.perm.success', 'Permissions pour la commande : $1 réglée pour le groupe : $2 et plus haut.');
$.lang.register('customcommands.set.perm.unset.success', 'Toutes les permissions récursives pour la commande : $1 et tout ses alias ont été retirés.');
$.lang.register('customcommands.set.perm.usage', 'Utilisation: !permcom (nom de commande) (group id/name). Restreint l\'utilisation d\'une commande à un certain niveau de viewer.');
$.lang.register('customcommands.set.perm.404', 'La commande ne peut être trouvée : $1');
$.lang.register('customcommands.set.price.error.404', 'Veuillez sélectionner une commande existante et disponible pour les non mods.');
$.lang.register('customcommands.set.price.error.invalid', 'Veuillez entrer un prix valide de 0 ou plus.');
$.lang.register('customcommands.set.price.success', 'Le prix pour !$1 a été réglé sur $2 $3.');
$.lang.register('customcommands.set.price.usage', 'Utilisation: !pricecom (commande) [sous-commande] [sous-action] (prix). Optionnel: sous-commande et sous-action');
$.lang.register('customcommands.set.pay.error.404', 'Veuillez sélectionner une commande existante et disponible pour les non mods.');
$.lang.register('customcommands.set.pay.error.invalid', 'Veuillez entrer un paiement valide de 0 ou plus.');
$.lang.register('customcommands.set.pay.success', 'Le paiement pour !$1 a été réglé sur $2 $3.');
$.lang.register('customcommands.set.pay.usage', 'Utilisation: !paycom (commande) (prix)');
$.lang.register('customcommands.404.no.commands', 'Il n\'y a actuellement aucune commande personnalisée, ajoutez-en une avec !addcom');
$.lang.register('customcommands.cmds', 'Commande personnalisée actuelle : $1');
$.lang.register('customcommands.edit.usage', 'Utilisation: !editcom (commande) (message)');
$.lang.register('customcommands.edit.success', 'La commande !$1 a été éditée!');
$.lang.register('customcommands.touser.offline', 'Désolé, mais $1 a l\'air d\'être hors ligne!');
$.lang.register('customcommands.customapi.404', 'La commande !$1 demande des paramètres.');
$.lang.register('customcommands.customapijson.err', '!$1: Une erreur s\'est produite en voulant récupérer l\'API.');
$.lang.register('customcommands.disable.usage', 'Utilisation: !disablecom (commande)');
$.lang.register('customcommands.disable.404', 'Cette commande n\'existe pas.');
$.lang.register('customcommands.disable.err', 'Cette commande est déjà désactivée.');
$.lang.register('customcommands.disable.success', 'La commande !$1 a été désactivée.');
$.lang.register('customcommands.enable.usage', 'Utilisation: !enablecom (commande)');
$.lang.register('customcommands.enable.404', 'Cette commande n\'existe pas');
$.lang.register('customcommands.enable.err', 'Cette commande est déjà activée.');
$.lang.register('customcommands.enable.success', 'La commande !$1 a été réactivée.');
$.lang.register('customcommands.reset.usage', 'Utilisation: !resetcom (commande) (compte). Si aucun (compte) alors il y aura reset à 0.');
$.lang.register('customcommands.reset.success', 'Le compteur pour !$1 a été réinitialisé.');
$.lang.register('customcommands.reset.change.fail', 'Valeur de compteur invalide: $1');
$.lang.register('customcommands.reset.change.success', 'Le compteur pour !$1 a été réglé sur $2.');
$.lang.register('customcommands.botcommands', 'Commandes : $1');
$.lang.register('customcommands.botcommands.error', 'Indiquez un nombre pour sélectionner une page.');
$.lang.register('customcommands.botcommands.total', 'Pages totales : $1 [Veuillez également regarder : https://phantombot.tv/commands]');
