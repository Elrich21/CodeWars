public class MixedSum {

    /*
    * Assume input will be only of Int or String type
    */
    public fun sum(mixed: List<Any>): Int = mixed.sumBy{//sumBy tries to add every element in the array i.e. total = total + mixed[i]
        when(it){ //it is like a pointer to the current pos of the element
            is Int -> it
            is String -> it.toInt()
            else ->0 
        }

    }
}
