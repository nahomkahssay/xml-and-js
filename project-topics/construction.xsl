<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <html>
    <body>
    <table>
    
        <jobs>
            <xsl:for-each select="/jobs/job">
                <job>
                    <supplies>
                        <xsl:for-each select="./supplies/supply">
                            <supply>
                                <qty>
                                    <xsl:value-of select="./qty"/>
                                </qty>
                                <material>
                                    <xsl:value-of select="./material"/>
                                </material>
                            </supply>
                        </xsl:for-each>
                    </supplies>
                    <equipments>
                        <xsl:for-each select="./equipments/equipment">
                            <equipment>
                                <quantity>
                                    <xsl:value-of select="./quantity"/>
                                </quantity>
                                <type>
                                    <xsl:value-of select="./type"/>
                                </type>
                            </equipment>
                        </xsl:for-each>
                    </equipments>
                    <workers>
                        <xsl:for-each select="./workers/worker">
                            <worker>
                                <role>
                                    <xsl:value-of select="./role"/>
                                </role>
                                <lastName>
                                    <xsl:value-of select="./lastName"/>
                                </lastName>
                                <firstName>
                                    <xsl:value-of select="./firstName"/>
                                </firstName>
                            </worker>
                        </xsl:for-each>
                    </workers>
                    <address>
                        <country>
                            <xsl:value-of select="./address/country"/>
                        </country>
                        <region>
                            <xsl:value-of select="./address/region"/>
                        </region>
                        <city>
                            <xsl:value-of select="./address/city"/>
                        </city>
                        <street>
                            <xsl:value-of select="./address/street"/>
                        </street>
                    </address>
                    <endDate>
                        <xsl:value-of select="./endDate"/>
                    </endDate>
                    <startDate>
                        <xsl:value-of select="./startDate"/>
                    </startDate>
                </job>
            </xsl:for-each>
        </jobs>
        </table>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>