var mcapi =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var commands_1 = __webpack_require__(1);
	exports.SummonCommand = commands_1.SummonCommand;
	exports.Achievement = commands_1.Achievement;
	exports.AchievementCommand = commands_1.AchievementCommand;
	var entities_1 = __webpack_require__(24);
	exports.Zombie = entities_1.Zombie;
	var core_1 = __webpack_require__(4);
	exports.Position = core_1.Position;
	exports.PositionType = core_1.PositionType;
	exports.Version = core_1.Version;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var SummonCommand_1 = __webpack_require__(2);
	exports.SummonCommand = SummonCommand_1.SummonCommand;
	var Achievement_1 = __webpack_require__(18);
	exports.Achievement = Achievement_1.Achievement;
	exports.AchievementCommand = Achievement_1.AchievementCommand;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var SummonCommand_1 = __webpack_require__(3);
	exports.SummonCommand = SummonCommand_1.SummonCommand;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(4);
	/**
	 * @name SummonCommand
	 * @description
	 * Summons an entity (mobs, projectiles, items, vehicles, etc.).
	 */
	var SummonCommand = (function () {
	    /**
	     * @description
	     * Summons an entity (mobs, projectiles, items, vehicles, etc.).
	     * @param {IEntity} entity The entity which should get summo2ned
	     */
	    function SummonCommand(entity, position) {
	        this.entity = entity;
	        this.position = position;
	    }
	    Object.defineProperty(SummonCommand.prototype, "Command", {
	        /**
	         * @name Command
	         * @description
	         * Generates the summon command and returns it as a string.
	         * @returns {String} The summon command, which is ready to import into Minecraft.
	         */
	        get: function () {
	            var command = '/summon ' + this.entity.Id;
	            if (this.position != undefined) {
	                if (this.position.Type == core_1.PositionType.Absolute) {
	                    command += ' ' + this.position.X +
	                        ' ' + this.position.Y +
	                        ' ' + this.position.Z;
	                }
	                else {
	                    command += ' ~' + this.position.X +
	                        ' ~' + this.position.Y +
	                        ' ~' + this.position.Z;
	                }
	            }
	            else {
	                command += ' ~ ~ ~';
	            }
	            if (this.entity.Command != '') {
	                command += ' ' + this.entity.Command;
	            }
	            return command;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SummonCommand;
	}());
	exports.SummonCommand = SummonCommand;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Entity_1 = __webpack_require__(5);
	exports.EntityTag = Entity_1.EntityTag;
	exports.Entity = Entity_1.Entity;
	exports.EntityTagData = Entity_1.EntityTagData;
	var Mob_1 = __webpack_require__(9);
	exports.MobTag = Mob_1.MobTag;
	exports.Mob = Mob_1.Mob;
	exports.MobTagData = Mob_1.MobTagData;
	var Position_1 = __webpack_require__(13);
	exports.Position = Position_1.Position;
	exports.PositionType = Position_1.PositionType;
	var Version_1 = __webpack_require__(16);
	exports.Version = Version_1.Version;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Entity_1 = __webpack_require__(6);
	exports.Entity = Entity_1.Entity;
	var EntityTag_1 = __webpack_require__(7);
	exports.EntityTag = EntityTag_1.EntityTag;
	var EntityTagData_1 = __webpack_require__(8);
	exports.EntityTagData = EntityTagData_1.EntityTagData;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(4);
	/**
	 * @name Entity
	 * @description
	 * Entities encompass all dynamic, moving objects throughout the Minecraft world.
	 */
	var Entity = (function () {
	    /**
	     * @description
	     * Initializes the Entity
	     * @param {String} name Identification of the entity, set by Minecraft
	     * @param {IEntity} entityTag The tags which should be writeable
	     */
	    function Entity(name, entityTag) {
	        this.id = name;
	        this.entityTag = entityTag || new _1.EntityTag();
	    }
	    Object.defineProperty(Entity.prototype, "Id", {
	        /**
	         * @name Id
	         * @description
	         * The name of the entity
	         * @returns {String} The id of the entity, set by Minecraft
	         */
	        get: function () {
	            return this.id;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Entity.prototype, "Tag", {
	        /**
	         * @name Tag
	         * @description
	         * Tags which modify the entity with your given values.
	         */
	        get: function () {
	            return this.entityTag;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Entity.prototype, "Command", {
	        /**
	         * @name Command
	         * @description
	         * The command of the entity.
	         * Is a JSON object, but provided as string
	         * @returns {String} The command as string.
	         */
	        get: function () {
	            // Replace e.g. {"CustomName": "MyName"} to {CustomName: "MyName"}
	            var command = JSON.stringify(this.entityTag.Data)
	                .replace(/\"([^(\")"]+)\":/g, '$1:');
	            return command != '{}' ? command : '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Entity;
	}());
	exports.Entity = Entity;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(5);
	/**
	 * @name EntityTag
	 * @description
	 * The wrapper around EntityTagData, which provides an easier
	 * way to write data to it.
	 */
	var EntityTag = (function () {
	    function EntityTag() {
	        this.data = new _1.EntityTagData();
	    }
	    Object.defineProperty(EntityTag.prototype, "UUIDLeast", {
	        /**
	         * @name UUIDLeast
	         * @description
	         * Sets the UUIDLeast of the Entity
	         * @returns {String} The UUIDLeast of the entity
	         */
	        get: function () {
	            return this.data.UUIDLeast;
	        },
	        /**
	         * @name UUIDLeast
	         * @description
	         * Sets the UUIDLeast of the Entity
	         * @param {String} value The UUIDLeast which should get set
	         */
	        set: function (value) {
	            this.data.UUIDLeast = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EntityTag.prototype, "UUIDMost", {
	        /**
	         * @name UUIDMost
	         * @description
	         * Returns the UUIDMost of the Entity
	         * @returns {String} The UUIDMost of the entity
	         */
	        get: function () {
	            return this.data.UUIDMost;
	        },
	        /**
	         * @name UUIDMost
	         * @description
	         * Sets the UUIDMost of the Entity
	         * @param {String} value The UUIDMost which should get set
	         */
	        set: function (value) {
	            this.data.UUIDMost = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EntityTag.prototype, "Invulnerable", {
	        /**
	         * @name Invulnerable
	         * @description
	         * Makes entities invulnerable
	         * @returns {Boolean} If the entity is invulnerable or not.
	         */
	        get: function () {
	            return this.data.Invulnerable;
	        },
	        /**
	         * @name Invulnerable
	         * @description
	         * Makes entities invulnerable
	         * @param {Boolean} value If the entity is invulnerable or not.
	         */
	        set: function (value) {
	            this.data.Invulnerable = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EntityTag.prototype, "NoAI", {
	        /**
	         * @name NoAI
	         * @description
	         * Makes entity have no AI.
	         * @returns {Boolean} If the entity has or hasn't AI
	         */
	        get: function () {
	            return this.data.NoAI;
	        },
	        /**
	         * @name NoAI
	         * @description
	         * Makes entity have no AI.
	         * @param {Boolean} value If the entity has or hasn't AI
	         */
	        set: function (value) {
	            this.data.NoAI = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @name AddPassenger
	     * @description
	     * Adds the given entity as passenger to this entity.
	     * @param {Entity} entity The entity, which should get added as passaenger, on top of this entity.
	     */
	    EntityTag.prototype.AddPassenger = function (entity) {
	        if (this.data.Passengers == undefined) {
	            this.data.Passengers = new Array();
	        }
	        var data = entity.Tag.Data;
	        data.id = entity.Id;
	        this.data.Passengers.push(data);
	    };
	    Object.defineProperty(EntityTag.prototype, "Fire", {
	        /**
	         * @name Fire
	         * @description
	         * Determines how many ticks a mob is on fire.
	         * @returns {Number} THe amount of time, in Ticks, the mob is on fire. -1, when not on fire.
	         */
	        get: function () {
	            return this.data.Fire;
	        },
	        /**
	         * @name Fire
	         * @description
	         * Determines how many ticks a mob is on fire.
	         * @param {Number} value The amount of ticks the mob is on fire. Must be between -1
	         * and 32767. Default -1, when not on fire.
	         */
	        set: function (value) {
	            if (value >= -1 && value <= 32767) {
	                this.data.Fire = value;
	            }
	            else {
	                throw new RangeError('Value must be between -1 and 32767');
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EntityTag.prototype, "NoGravity", {
	        /**
	         * @name NoGravity
	         * @description
	         * Makes entity unaffected by gravity.
	         * @returns {Boolean} Whether the entity is affected by gravity or not.
	         */
	        get: function () {
	            return this.data.NoGravity;
	        },
	        /**
	         * @name NoGravity
	         * @description
	         * Makes entity unaffected by gravity.
	         * @param {Boolean} value If the entity should be affacted by gravity or not.
	         */
	        set: function (value) {
	            this.data.NoGravity = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(EntityTag.prototype, "Data", {
	        /**
	         * @name Data
	         * @description
	         * The data of the entity, which can be converted to the JSON string,
	         * which can be processed by Minecraft.
	         */
	        get: function () {
	            return this.data;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return EntityTag;
	}());
	exports.EntityTag = EntityTag;


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @name EntityTagData
	 * @description
	 * This class represents the real Tags, which get converted to JSON String, when
	 * the command is getting generated.
	 */
	var EntityTagData = (function () {
	    function EntityTagData() {
	    }
	    return EntityTagData;
	}());
	exports.EntityTagData = EntityTagData;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Mob_1 = __webpack_require__(10);
	exports.Mob = Mob_1.Mob;
	var MobTag_1 = __webpack_require__(11);
	exports.MobTag = MobTag_1.MobTag;
	var MobTagData_1 = __webpack_require__(12);
	exports.MobTagData = MobTagData_1.MobTagData;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var _1 = __webpack_require__(4);
	/**
	 * @name Mob
	 * @description
	 * Mobs are living, moving game entities. The term "mob" is short for "mobile".
	 */
	var Mob = (function (_super) {
	    __extends(Mob, _super);
	    /**
	     * @param {String} id The id of the entity
	     */
	    function Mob(id, entityTag) {
	        return _super.call(this, id, entityTag || new _1.MobTag()) || this;
	    }
	    Object.defineProperty(Mob.prototype, "Tag", {
	        /**
	         * @name Tag
	         * @description
	         * Tags which modify the entity with your given values.
	         */
	        get: function () {
	            return this.entityTag;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Mob;
	}(_1.Entity));
	exports.Mob = Mob;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var _1 = __webpack_require__(4);
	/**
	 * @name MobTag
	 * @description
	 * The wrapper around MobTagData, which provides an easier
	 * way to write data to it.
	 */
	var MobTag = (function (_super) {
	    __extends(MobTag, _super);
	    function MobTag() {
	        var _this = _super.apply(this, arguments) || this;
	        _this.data = new _1.MobTagData();
	        return _this;
	    }
	    Object.defineProperty(MobTag.prototype, "AttackTime", {
	        /**
	         * @name AttackTime
	         * @description
	         * Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
	         * @returns {Number} Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
	         */
	        get: function () {
	            return this.data.AttackTime;
	        },
	        /**
	         * @name AttackTime
	         * @description
	         * Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
	         * @param {Number} value Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
	         */
	        set: function (value) {
	            this.data.AttackTime = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MobTag.prototype, "Data", {
	        /**
	        * @name Data
	        * @description
	        * The data of the mob, which can be converted to the JSON string,
	        * which can be processed by Minecraft.
	        */
	        get: function () {
	            return this.data;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return MobTag;
	}(_1.EntityTag));
	exports.MobTag = MobTag;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var _1 = __webpack_require__(4);
	/**
	 * @name MobTagData
	 * @description
	 * This class represents the real Tags, which get converted to JSON String, when
	 * the command is getting generated.
	 */
	var MobTagData = (function (_super) {
	    __extends(MobTagData, _super);
	    function MobTagData() {
	        return _super.apply(this, arguments) || this;
	    }
	    return MobTagData;
	}(_1.EntityTagData));
	exports.MobTagData = MobTagData;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PositionType_1 = __webpack_require__(14);
	exports.PositionType = PositionType_1.PositionType;
	var Position_1 = __webpack_require__(15);
	exports.Position = Position_1.Position;


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @name PositionType
	 * @description
	 * A positiontype, which can be either Relative or Absolute
	 */
	var PositionType;
	(function (PositionType) {
	    /**
	     * @name Relative
	     * @description
	     * A position, which is relative to another object
	     */
	    PositionType[PositionType["Relative"] = 0] = "Relative";
	    /**
	     * @name Absolute
	     * @description
	     * A position, which is absolute
	     */
	    PositionType[PositionType["Absolute"] = 1] = "Absolute";
	})(PositionType = exports.PositionType || (exports.PositionType = {}));


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @name Position
	 * @description
	 * Represents one position, containing X, Y, Z coordinates
	 * to identify the current position
	 */
	var Position = (function () {
	    /**
	     * @param {Number} x The coordinate on the X-Axis
	     * @param {Number} y The coordinate on the Y-Axis
	     * @param {Number} z The coordinate on the Z-Axis
	     * @param {PositionType} type  The type of the position, which can be either absolute or relative
	     */
	    function Position(x, y, z, type) {
	        this.x = x;
	        this.y = y;
	        this.z = z;
	        this.type = type;
	    }
	    Object.defineProperty(Position.prototype, "X", {
	        /**
	         * @returns The X-Coordinate of the position.
	         */
	        get: function () {
	            return this.x;
	        },
	        /**
	         * @param {Number} value The x coordinate which get set
	         */
	        set: function (value) {
	            this.x = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Position.prototype, "Y", {
	        /**
	         * @returns The Y-Coordinate of the position.
	         */
	        get: function () {
	            return this.y;
	        },
	        /**
	         * @param {Number} value The y coordinate which get set
	         */
	        set: function (value) {
	            this.y = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Position.prototype, "Z", {
	        /**
	         * @returns The Z-Coordinate of the position.
	         */
	        get: function () {
	            return this.z;
	        },
	        /**
	         * @param {Number} value The z coordinate which should get set
	         */
	        set: function (value) {
	            this.z = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Position.prototype, "Type", {
	        /**
	         * @returns The type of the position, which can be either relative or absolute.
	         */
	        get: function () {
	            return this.type;
	        },
	        /**
	         * @param {PositionType} value The type of the position, which can be either relative or absolute.
	         */
	        set: function (value) {
	            this.type = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Position;
	}());
	exports.Position = Position;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Version_1 = __webpack_require__(17);
	exports.Version = Version_1.default;


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @name Version
	 * @description
	 * The version of this API
	 */
	var Version = (function () {
	    /**
	     * @description
	     * Initializes the Version
	     * @param {String} name The name of the Version
	     * @param {String} mcVersion The Minecraft Version which is support in this version.
	     */
	    function Version(name, mcVersion) {
	        this.name = name;
	        this.mcVersion = mcVersion;
	    }
	    Object.defineProperty(Version.prototype, "Name", {
	        /**
	         * @name Name
	         * @description
	         * The name of the current version
	         */
	        get: function () {
	            return this.name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Version.prototype, "MCVersion", {
	        /**
	         * @name MCVersion
	         * @description
	         * The Minecraft Version which is support in this version.
	         */
	        get: function () {
	            return this.mcVersion;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Version;
	}());
	exports.Version = Version;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = new Version('0.0.4', '1.11');


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Achievement_1 = __webpack_require__(19);
	exports.Achievement = Achievement_1.Achievement;
	var AchievementCommand_1 = __webpack_require__(20);
	exports.AchievementCommand = AchievementCommand_1.AchievementCommand;
	var AchievementCommandFrom_1 = __webpack_require__(21);
	exports.AchievementCommandFrom = AchievementCommandFrom_1.AchievementCommandFrom;
	var AchievementCommandTo_1 = __webpack_require__(22);
	exports.AchievementCommandTo = AchievementCommandTo_1.AchievementCommandTo;
	var AchievementCommandCommand_1 = __webpack_require__(23);
	exports.AchievementCommandCommand = AchievementCommandCommand_1.AchievementCommandCommand;


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @name Achievement
	 * @description
	 * Achievements are a way to gradually guide new players into Minecraft and give them challenges to complete.
	 */
	var Achievement;
	(function (Achievement) {
	    /**
	     * Taking Inventory
	     * Press 'E' to open your inventory
	     */
	    Achievement[Achievement["openInventory"] = 0] = "openInventory";
	    /**
	     * Getting Wood
	     * Attack a tree until a block of wood pops out
	     */
	    Achievement[Achievement["mineWood"] = 1] = "mineWood";
	    /**
	     * Benchmarking
	     * Craft a workbench with four blocks of planks
	     */
	    Achievement[Achievement["buildWorkBench"] = 2] = "buildWorkBench";
	    /**
	     * Time to Mine!
	     * Use planks and sticks to make a pickaxe
	     */
	    Achievement[Achievement["buildPickaxe"] = 3] = "buildPickaxe";
	    /**
	     * Hot Topic
	     * Construct a furnace out of eight cobblestone blocks
	     */
	    Achievement[Achievement["buildFurnace"] = 4] = "buildFurnace";
	    /**
	     * Acquire Hardware
	     * Smelt an iron ingot
	     */
	    Achievement[Achievement["acquireIron"] = 5] = "acquireIron";
	    /**
	     * Time to Farm!
	     * Use planks and sticks to make a hoe
	     */
	    Achievement[Achievement["buildHoe"] = 6] = "buildHoe";
	    /**
	     * Bake Bread
	     * Turn wheat into bread
	     */
	    Achievement[Achievement["makeBread"] = 7] = "makeBread";
	    /**
	     * The Lie
	     * Wheat, sugar, milk, and eggs
	     */
	    Achievement[Achievement["bakeCake"] = 8] = "bakeCake";
	    /**
	     * Getting an Upgrade
	     * Construct a better pickaxe
	     */
	    Achievement[Achievement["buildBetterPickaxe"] = 9] = "buildBetterPickaxe";
	    /**
	     * Delicious Fish
	     * Catch and cook a fish!
	     */
	    Achievement[Achievement["cookFish"] = 10] = "cookFish";
	    /**
	     * On A Rail
	     * Travel by minecart at least 1 km from where you started
	     */
	    Achievement[Achievement["onARail"] = 11] = "onARail";
	    /**
	     * Time to Strike!
	     * Use planks and sticks to make a sword
	     */
	    Achievement[Achievement["buildSword"] = 12] = "buildSword";
	    /**
	     * Monster Hunter
	     * Attack and destroy a monster
	     */
	    Achievement[Achievement["killEnemy"] = 13] = "killEnemy";
	    /**
	     * Cow Tipper
	     * Harvest some leather
	     */
	    Achievement[Achievement["killCow"] = 14] = "killCow";
	    /**
	     * When Pigs Fly
	     * Fly a pig off a cliff
	     */
	    Achievement[Achievement["flyPig"] = 15] = "flyPig";
	    /**
	     * Sniper Duel
	     * Kill a skeleton with an arrow from more than 50 meters
	     */
	    Achievement[Achievement["snipeSkeleton"] = 16] = "snipeSkeleton";
	    /**
	     * DIAMONDS!
	     * Acquire diamonds with your iron tools
	     */
	    Achievement[Achievement["diamonds"] = 17] = "diamonds";
	    /**
	     * We Need to Go Deeper
	     * Build a portal to the Nether
	     */
	    Achievement[Achievement["portal"] = 18] = "portal";
	    /**
	     * Return to Sender
	     * Destroy a Ghast with a fireball
	     */
	    Achievement[Achievement["ghast"] = 19] = "ghast";
	    /**
	     * Into Fire
	     * Relieve a Blaze of its rod
	     */
	    Achievement[Achievement["blazeRod"] = 20] = "blazeRod";
	    /**
	     * Local Brewery
	     * Brew a potion
	     */
	    Achievement[Achievement["potion"] = 21] = "potion";
	    /**
	     * The End?
	     * Locate the End
	     */
	    Achievement[Achievement["theEnd"] = 22] = "theEnd";
	    /**
	     * The End.
	     * Defeat the Ender Dragon
	     */
	    Achievement[Achievement["theEnd2"] = 23] = "theEnd2";
	    /**
	     * Enchanter
	     * Use a book, obsidian and diamonds to construct an enchantment table
	     */
	    Achievement[Achievement["enchantments"] = 24] = "enchantments";
	    /**
	     * Overkill
	     * Deal nine hearts of damage in a single hit
	     */
	    Achievement[Achievement["overkill"] = 25] = "overkill";
	    /**
	     * Librarian
	     * Build some bookshelves to improve your enchantment table
	     */
	    Achievement[Achievement["bookcase"] = 26] = "bookcase";
	    /**
	     * Adventuring Time
	     * Discover all biomes
	     */
	    Achievement[Achievement["exploreAllBiomes"] = 27] = "exploreAllBiomes";
	    /**
	     * The Beginning?
	     * Spawn the Wither
	     */
	    Achievement[Achievement["spawnWither"] = 28] = "spawnWither";
	    /**
	     * The Beginning.
	     * Kill the Wither
	     */
	    Achievement[Achievement["killWither"] = 29] = "killWither";
	    /**
	     * Beaconator
	     * Create a full beacon
	     */
	    Achievement[Achievement["fullBeacon"] = 30] = "fullBeacon";
	    /**
	     * Repopulation
	     * Breed two cows with wheat
	     */
	    Achievement[Achievement["breedCow"] = 31] = "breedCow";
	    /**
	     * Diamonds to you!
	     * Throw diamonds at another player
	     */
	    Achievement[Achievement["diamondsToYou"] = 32] = "diamondsToYou";
	    /**
	     * Overpowered
	     * Eat a Notch apple
	     */
	    Achievement[Achievement["overpowered"] = 33] = "overpowered";
	    /**
	     * Every achievement
	     */
	    Achievement[Achievement["all"] = 34] = "all";
	})(Achievement = exports.Achievement || (exports.Achievement = {}));
	;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(18);
	/**
	 * @name AchievementCommand
	 * @description
	 * Builder part of the AchievementCommand.
	 * Gives or takes the given achievement from the user
	 */
	var AchievementCommand = (function () {
	    function AchievementCommand() {
	    }
	    /**
	     * @name Give
	     * @description
	     * Gives the player the given Achievement
	     * @param {Achievement} name The achievement the player should get
	     */
	    AchievementCommand.prototype.Give = function (name) {
	        return new _1.AchievementCommandTo(name);
	    };
	    /**
	     * @name Take
	     * @description
	     * Takes from the player the given Achievement
	     * @param {Achievement} name The achievement the player should loose
	     */
	    AchievementCommand.prototype.Take = function (name) {
	        return new _1.AchievementCommandFrom(name);
	    };
	    return AchievementCommand;
	}());
	exports.AchievementCommand = AchievementCommand;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(18);
	/**
	 * @name AchievementCommandFrom
	 * @description
	 * Builder part of the AchievementCommand.
	 * Adds a playername to a command.
	 * Is used when calling 'Take' on IAchievementCommand
	 */
	var AchievementCommandFrom = (function () {
	    /**
	     * @description
	     * Initializes the Object.
	     * @param {Achievement} achievement The achievement to take from a player
	     */
	    function AchievementCommandFrom(achievement) {
	        this.achievement = achievement;
	    }
	    /**
	     * @name To
	     * @description
	     * Registers the playername to the command
	     * @param {String} player The player you want to take the achievement.
	     * @returns {AchievementCommandCommand} The final command, which can generate it as a string.
	     */
	    AchievementCommandFrom.prototype.From = function (player) {
	        return new _1.AchievementCommandCommand(false, this.achievement, player);
	    };
	    return AchievementCommandFrom;
	}());
	exports.AchievementCommandFrom = AchievementCommandFrom;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(18);
	/**
	 * @name AchievementCommandTo
	 * @description
	 * Builder part of the AchievementCommand.
	 * Adds a playername to a command.
	 * Is used when calling 'Give' on IAchievementCommand
	 */
	var AchievementCommandTo = (function () {
	    /**
	     * @description
	     * Initializes the Object.
	     * @param {Achievement} achievement The achievement to give to a player
	     */
	    function AchievementCommandTo(achievement) {
	        this.achievement = achievement;
	    }
	    /**
	     * @name To
	     * @description
	     * Registers the playername to the command
	     * @param {String} player The player you want to give the achievement.
	     * @returns {AchievementCommandCommand} The final command, which can generate it as a string.
	     */
	    AchievementCommandTo.prototype.To = function (player) {
	        return new _1.AchievementCommandCommand(true, this.achievement, player);
	    };
	    return AchievementCommandTo;
	}());
	exports.AchievementCommandTo = AchievementCommandTo;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _1 = __webpack_require__(18);
	/**
	 * @name AchievementCommandCommand
	 * @description
	 * Generates the final Achievment Command.
	 */
	var AchievementCommandCommand = (function () {
	    /**
	     * @description
	     * Initializes the class
	     * @param {Boolean} isGiven If the command should 'take' or 'give' the achievement
	     * @param {Achievement} achievement The achievement to give or take
	     * @param {String} playername The playername which have or delete the given achievement.
	     */
	    function AchievementCommandCommand(isGiven, achievement, playerName) {
	        this.isGiven = isGiven;
	        this.achievement = achievement;
	        this.playerName = playerName;
	    }
	    /**
	     * @name GetAchievementName
	     * @description
	     * Gets the name of achievement, by its value
	     * @param {Achievement} achievement The achievement you want to have the name of.
	     * @returns {String} The name of the achievement, of the given value
	     */
	    AchievementCommandCommand.prototype.GetAchievementName = function (achievement) {
	        return _1.Achievement[achievement];
	    };
	    ;
	    Object.defineProperty(AchievementCommandCommand.prototype, "Command", {
	        /**
	         * @name Command
	         * @description
	         * Generates the achievement command and returns it as string
	         * @returns {String} The achievement command as string
	         */
	        get: function () {
	            var command = '/achievement ';
	            if (this.isGiven) {
	                command += 'give ';
	            }
	            else {
	                command += 'take ';
	            }
	            if (this.achievement == _1.Achievement.all) {
	                command += '* ';
	            }
	            else {
	                command += 'achievement.' + this.GetAchievementName(this.achievement) + ' ';
	            }
	            command += this.playerName;
	            return command;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return AchievementCommandCommand;
	}());
	exports.AchievementCommandCommand = AchievementCommandCommand;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Zombie_1 = __webpack_require__(25);
	exports.Zombie = Zombie_1.Zombie;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Zombie_1 = __webpack_require__(26);
	exports.Zombie = Zombie_1.Zombie;
	var ZombieTag_1 = __webpack_require__(27);
	exports.ZombieTag = ZombieTag_1.ZombieTag;
	var ZombieTagData_1 = __webpack_require__(28);
	exports.ZombieTagData = ZombieTagData_1.ZombieTagData;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(4);
	var _1 = __webpack_require__(25);
	/**
	 * @name Zombie
	 * @description
	 * Zombies are common, undead hostile mobs that come in many variants.
	 */
	var Zombie = (function (_super) {
	    __extends(Zombie, _super);
	    /**
	     * @description
	     * Initializes the Zombie
	     */
	    function Zombie() {
	        return _super.call(this, 'Zombie', new _1.ZombieTag()) || this;
	    }
	    Object.defineProperty(Zombie.prototype, "Tag", {
	        /**
	         * Tags which modify the entity with your given values.
	         */
	        get: function () {
	            return this.entityTag;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Zombie;
	}(core_1.Mob));
	exports.Zombie = Zombie;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(4);
	var _1 = __webpack_require__(25);
	/**
	 * @name ZombieTag
	 * @description
	 * The wrapper around ZombieTagData, which provides an easier
	 * way to write data to it.
	 */
	var ZombieTag = (function (_super) {
	    __extends(ZombieTag, _super);
	    function ZombieTag() {
	        var _this = _super.apply(this, arguments) || this;
	        _this.data = new _1.ZombieTagData();
	        return _this;
	    }
	    Object.defineProperty(ZombieTag.prototype, "CanBreakDoors", {
	        /**
	         * @name CanBreakDoors
	         * @description
	         * If the zombie can break doors
	         * @returns {Boolean} If the zombie can break doors
	         */
	        get: function () {
	            return this.data.CanBreakDoors;
	        },
	        /**
	         * @name CanBreakDoors
	         * @description
	         * If the zombie can break doors
	         * @param {Boolean} value If the zombie can break doors
	         */
	        set: function (value) {
	            this.data.CanBreakDoors = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ZombieTag.prototype, "Data", {
	        /**
	        * @name Data
	        * @description
	        * The data of the zombie, which can be converted to the JSON string,
	        * which can be processed by Minecraft.
	        */
	        get: function () {
	            return this.data;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return ZombieTag;
	}(core_1.MobTag));
	exports.ZombieTag = ZombieTag;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(4);
	/**
	 * @name ZombieTagData
	 * @description
	 * This class represents the real Tags, which get converted to JSON String, when
	 * the command is getting generated.
	 */
	var ZombieTagData = (function (_super) {
	    __extends(ZombieTagData, _super);
	    function ZombieTagData() {
	        return _super.apply(this, arguments) || this;
	    }
	    return ZombieTagData;
	}(core_1.MobTagData));
	exports.ZombieTagData = ZombieTagData;


/***/ }
/******/ ]);