#!/bin/bash

# Enhance to use getopts to echo additional flags into the test command
txtund=$(tput sgr 0 1)		  # Underline
txtbld=$(tput bold)			 # Bold
grn=$(tput setaf 2)			 # Green
red=$(tput setaf 1)			 # Red
bldgrn=${txtbld}$(tput setaf 2) # Bold Green
bldred=${txtbld}$(tput setaf 1) # Bold Red
txtrst=$(tput sgr0)			 # Reset

usage()
{
cat << EOF
${txtbld}SYNOPSIS${txtrst}
	$0 new_component

${txtbld}DESCRIPTION${txtrst}
	${txtbld}new_component${txtrst}
	    Completely initialises a new components with it's JS, SASS and tests files. Also adds the SASS file to the "all.sass" file.${txtrst}
  ${txtbld}create_component${txtrst}
	    Create ONLY the skeleton of a new component in the "src/components" directory.${txtrst}
  ${txtbld}create_sass${txtrst}
	    Create ONLY component's SASS file in the "src/stylesheets/components" directory.${txtrst}
  ${txtbld}add_to_sass_all${txtrst}
	    Adds a component with the given name to the "src/stylesheets/components/all.sass" file.${txtrst}
  ${txtbld}create_test${txtrst}
	    Create ONLY the test file for the component in the "src/components/test" directory.${txtrst}

EOF
exit 1
}

create_component()
{
  base_name=$2
  component_name="$(tr '[:lower:]' '[:upper:]' <<< ${base_name:0:1})${base_name:1}" # Capitalise 1st Letter.
  component_template=`cat templates/component`
  str_to_replace='__component__'
  echo "${component_template//$str_to_replace/$component_name}" >> "../src/components/${component_name}.js"
}

create_sass()
{
  base_name=$2
  component_name="$(tr '[:upper:]' '[:lower:]' <<< ${base_name:0:1})${base_name:1}" # Lowercase 1st Letter.
  sass_template=`cat templates/sass`
  str_to_replace='__component__'
  echo "${sass_template//$str_to_replace/$component_name}" >> "../src/stylesheets/components/_${component_name}.sass"
}

add_to_sass_all()
{
  echo "@include ${component_name}" >> "../src/stylesheets/components/all.sass"
}

create_test()
{
  base_name=$2
  component_name="$(tr '[:lower:]' '[:upper:]' <<< ${base_name:0:1})${base_name:1}" # Capitalise 1st Letter
  test_template=`cat templates/test`
  str_to_replace='__component__'
  echo "${test_template//$str_to_replace/$component_name}" >> "../src/components/test/${component_name}.test.js"
}

new_component()
{
  create_component
  create_sass
  add_to_sass_all
  create_test
}

parse () {
	if [[ $# -eq 0 ]]; then
		usage
	elif [ $1 = "new_component" ]; then
		new_component
	else
	  usage
	fi
}

parse $@
