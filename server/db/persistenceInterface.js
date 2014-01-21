/**
* COPYRIGHT (C) 2014, Rapid7 LLC, Boston, MA, USA.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// Interface for persistence
/* jshint unused:false */
module.exports = {

    /* Create a new property
     * role     string
     * property object      {name, value, type}
     */
    createProperty : function(role, name, value, type, callback) {

    },

    /* Bulk update/create properties
     * role         string
     * properties   list        list of property objects
     */
    createProperties : function(role, properties, callback) {

    },

    /* Delete a property
     * role     string
     * name     string
     */
    deleteProperty : function(role, name, callback) {

    },

    /* Get all properties for a role
     * includeGlobal true/false
     * role     string
     * returns json
     */
    getPropertiesForWeb : function(role, callback) {

    },

    /* Get all properties for a role and overlay global properties
     * includeGlobal true/false
     * role     string
     * returns text/plain
     */
    getPropertiesForClient : function(role, callback) {

    },

    /* Gets a property for a role by name
     * role     string
     * name     string
     */
    getPropertyForWeb : function(role, name, callback) {

    },

    /* Return a list of roles
     */
    getRoles : function(callback) {

    },

    /* Checks in a instance of a role 
     */
    instanceCheckIn : function(role, ipAddress, callback) {

    },

    /* Checks every #{ageOutTime} seconds. If an instance has not checked in, mark
     * it offline
     */
    markInstsancesOffline : function(ageOutTime) {

    }

};