package org.gaurdianaq.mariadbserver;

public class Test {
    public int testValue;

    public Test(int testValue) {
        this.testValue = testValue;
    }

    @Override
    public String toString() {
        return "Test value is " + testValue;
    }
}
