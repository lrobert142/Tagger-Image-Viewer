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
  ${txtbld}new${txtrst}
	    Alias for new_component.${txtrst}
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
  component_name="$(tr '[:lower:]' '[:upper:]' <<< ${name:0:1})${name:1}" # Capitalise 1st Letter.
  component_template=`cat $dir/templates/component`
  str_to_replace='__component__'
  echo "${component_template//$str_to_replace/$component_name}" >> "$dir/../src/components/${component_name}.js"
}

create_sass()
{
  component_name="$(tr '[:upper:]' '[:lower:]' <<< ${name:0:1})${name:1}" # Lowercase 1st Letter.
  sass_template=`cat $dir/templates/sass`
  str_to_replace='__component__'
  echo "${sass_template//$str_to_replace/$component_name}" >> "$dir/../src/stylesheets/components/_${component_name}.sass"
}

add_to_sass_all()
{
	component_name="$(tr '[:upper:]' '[:lower:]' <<< ${name:0:1})${name:1}" # Lowercase 1st Letter.
  echo "@import ${component_name}" >> "$dir/../src/stylesheets/components/all.sass"
}

create_test()
{
  component_name="$(tr '[:lower:]' '[:upper:]' <<< ${name:0:1})${name:1}" # Capitalise 1st Letter
  test_template=`cat $dir/templates/test`
  str_to_replace='__component__'
  echo "${test_template//$str_to_replace/$component_name}" >> "$dir/../src/components/test/${component_name}.test.js"
}

new_component()
{
	name=$1
	dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
  create_component $name $dir
  create_sass $name $dir
  add_to_sass_all $name $dir
  create_test $name $dir
}

parse () {
	if [[ $# -eq 0 ]]; then
		usage
	elif [ $1 = "new_component" ]; then
		new_component $2
  elif [ $1 = "new" ]; then
		new_component $2
	else
	  usage
	fi
}

parse $@
echo "Finished!"
