<?php











namespace Composer;

use Composer\Semver\VersionParser;






class InstalledVersions
{
private static $installed = array (
  'root' => 
  array (
    'pretty_version' => 'dev-develop',
    'version' => 'dev-develop',
    'aliases' => 
    array (
    ),
    'reference' => '89c1ad73ad73e3f3ba233ffb2085e9fd034b1c0f',
    'name' => 'zionbuilder/zionbuilder',
  ),
  'versions' => 
  array (
    'dealerdirect/phpcodesniffer-composer-installer' => 
    array (
      'pretty_version' => 'v0.7.1',
      'version' => '0.7.1.0',
      'aliases' => 
      array (
      ),
      'reference' => 'fe390591e0241955f22eb9ba327d137e501c771c',
    ),
    'ergebnis/composer-normalize' => 
    array (
      'pretty_version' => '2.23.0',
      'version' => '2.23.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '8139e8efbdb481e8907e03fca09c2507fe560751',
    ),
    'ergebnis/json-normalizer' => 
    array (
      'pretty_version' => '2.1.0',
      'version' => '2.1.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '2039eb11131a243b9204bf51219baa08935e6b1d',
    ),
    'ergebnis/json-printer' => 
    array (
      'pretty_version' => '3.2.0',
      'version' => '3.2.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '651cab2b7604a6b338d0d16749f5ea0851a68005',
    ),
    'ergebnis/json-schema-validator' => 
    array (
      'pretty_version' => '2.0.0',
      'version' => '2.0.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'dacd8a47c1cc2c426ec71e952da3609ebe901fac',
    ),
    'giacocorsiglia/wordpress-stubs' => 
    array (
      'replaced' => 
      array (
        0 => '*',
      ),
    ),
    'justinrainbow/json-schema' => 
    array (
      'pretty_version' => '5.2.11',
      'version' => '5.2.11.0',
      'aliases' => 
      array (
      ),
      'reference' => '2ab6744b7296ded80f8cc4f9509abbff393399aa',
    ),
    'localheinz/diff' => 
    array (
      'pretty_version' => '1.1.1',
      'version' => '1.1.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '851bb20ea8358c86f677f5f111c4ab031b1c764c',
    ),
    'php-stubs/wordpress-stubs' => 
    array (
      'pretty_version' => 'v5.8.2',
      'version' => '5.8.2.0',
      'aliases' => 
      array (
      ),
      'reference' => '67fd773742b7be5b4463f40318b0b4890a07033b',
    ),
    'phpstan/phpstan' => 
    array (
      'pretty_version' => '0.12.99',
      'version' => '0.12.99.0',
      'aliases' => 
      array (
      ),
      'reference' => 'b4d40f1d759942f523be267a1bab6884f46ca3f7',
    ),
    'squizlabs/php_codesniffer' => 
    array (
      'pretty_version' => '3.6.2',
      'version' => '3.6.2.0',
      'aliases' => 
      array (
      ),
      'reference' => '5e4e71592f69da17871dba6e80dd51bce74a351a',
    ),
    'symfony/polyfill-php73' => 
    array (
      'pretty_version' => 'v1.24.0',
      'version' => '1.24.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'cc5db0e22b3cb4111010e48785a97f670b350ca5',
    ),
    'szepeviktor/phpstan-wordpress' => 
    array (
      'pretty_version' => 'v0.7.7',
      'version' => '0.7.7.0',
      'aliases' => 
      array (
      ),
      'reference' => 'bdbea69b2ba4a69998c3b6fe2b7106d78a23bd72',
    ),
    'woocommerce/action-scheduler' => 
    array (
      'pretty_version' => '3.4.0',
      'version' => '3.4.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '3218a33ff14b968f8cb05de9656c2efa1eeb1330',
    ),
    'wp-coding-standards/wpcs' => 
    array (
      'pretty_version' => '2.3.0',
      'version' => '2.3.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '7da1894633f168fe244afc6de00d141f27517b62',
    ),
    'zionbuilder/zionbuilder' => 
    array (
      'pretty_version' => 'dev-develop',
      'version' => 'dev-develop',
      'aliases' => 
      array (
      ),
      'reference' => '89c1ad73ad73e3f3ba233ffb2085e9fd034b1c0f',
    ),
  ),
);







public static function getInstalledPackages()
{
return array_keys(self::$installed['versions']);
}









public static function isInstalled($packageName)
{
return isset(self::$installed['versions'][$packageName]);
}














public static function satisfies(VersionParser $parser, $packageName, $constraint)
{
$constraint = $parser->parseConstraints($constraint);
$provided = $parser->parseConstraints(self::getVersionRanges($packageName));

return $provided->matches($constraint);
}










public static function getVersionRanges($packageName)
{
if (!isset(self::$installed['versions'][$packageName])) {
throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}

$ranges = array();
if (isset(self::$installed['versions'][$packageName]['pretty_version'])) {
$ranges[] = self::$installed['versions'][$packageName]['pretty_version'];
}
if (array_key_exists('aliases', self::$installed['versions'][$packageName])) {
$ranges = array_merge($ranges, self::$installed['versions'][$packageName]['aliases']);
}
if (array_key_exists('replaced', self::$installed['versions'][$packageName])) {
$ranges = array_merge($ranges, self::$installed['versions'][$packageName]['replaced']);
}
if (array_key_exists('provided', self::$installed['versions'][$packageName])) {
$ranges = array_merge($ranges, self::$installed['versions'][$packageName]['provided']);
}

return implode(' || ', $ranges);
}





public static function getVersion($packageName)
{
if (!isset(self::$installed['versions'][$packageName])) {
throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}

if (!isset(self::$installed['versions'][$packageName]['version'])) {
return null;
}

return self::$installed['versions'][$packageName]['version'];
}





public static function getPrettyVersion($packageName)
{
if (!isset(self::$installed['versions'][$packageName])) {
throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}

if (!isset(self::$installed['versions'][$packageName]['pretty_version'])) {
return null;
}

return self::$installed['versions'][$packageName]['pretty_version'];
}





public static function getReference($packageName)
{
if (!isset(self::$installed['versions'][$packageName])) {
throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}

if (!isset(self::$installed['versions'][$packageName]['reference'])) {
return null;
}

return self::$installed['versions'][$packageName]['reference'];
}





public static function getRootPackage()
{
return self::$installed['root'];
}







public static function getRawData()
{
return self::$installed;
}



















public static function reload($data)
{
self::$installed = $data;
}
}
