/* 
* create DB 
*/
CREATE DATABASE skills; 

/* 
* create skills table 
*/ 
CREATE TABLE `skills` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  `category` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  `rating` int(10) unsigned NOT NULL,
  `icon_url` varchar(100) COLLATE utf8_swedish_ci NOT NULL,
  `has_addons` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

/* 
* insert all skills into skills table 
*/ 
INSERT INTO `skills` (`id`, `name`, `category`, `rating`, `icon_url`, `has_addons`)
VALUES
	(1, 'html', 'frontend', 80, 'img/skills/html5.png', 1),
	(2, 'javascript', 'frontend', 80, 'img/skills/js.png', 1),
	(3, 'php', 'backend', 40, 'img/skills/php.png', 1),
	(4, 'css', 'frontend', 80, 'img/skills/css3.png', 1),
	(5, 'node', 'backend', 60, 'img/skills/node.png', 1),
	(6, 'npm', 'tools', 70, 'img/skills/npm.png', 0),
	(7, 'webpack', 'tools', 50, 'img/skills/webpack.png', 0),
	(8, 'python', 'other', 10, 'img/skills/python.png', 0),
	(9, 'c#', 'other', 10, 'img/skills/csharp.png', 0),
	(10, 'git', 'tools', 40, 'img/skills/git.png', 0),
	(11, 'github', 'tools', 40, 'img/skills/github.png', 0);


/* 
* create addons table
*/ 
CREATE TABLE `addons` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  `rating` int(10) unsigned NOT NULL,
  `icon_url` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  `category` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;


/* 
* insert addons into addons table 
*/ 
INSERT INTO `addons` (`id`, `name`, `rating`, `icon_url`, `category`)
VALUES
	(1, 'es6', 80, 'img/skills/es6.png', 'frontend'),
	(2, 'laravel', 40, 'img/skills/laravel.png', 'backend'),
	(3, 'react', 70, 'img/skills/react.png', 'frontend'),
	(4, 'vue', 40, 'img/skills/vue.png', 'frontend'),
	(5, 'mongodb', 40, 'img/skills/mongodb.jpg', 'backend'),
	(6, 'mysql', 40, 'img/skills/mysql.jpg', 'backend'),
	(7, 'express', 60, 'img/skills/express.png', 'backend'),
	(8, 'socket io', 40, 'img/skills/socketio.gif', 'backend'),
	(9, 'wordpress', 40, 'img/skills/wordpress.png', 'backend'),
	(10, 'angular', 10, 'img/skills/angular.png', 'frontend'),
	(11, 'typescript', 10, 'img/skills/typescript.svg', 'frontend');
